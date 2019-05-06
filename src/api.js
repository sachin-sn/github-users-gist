const fetch = require('node-fetch')


const status = (response) => {
  if (response.status === 1223) { // needed for IE9 only
    response.statusText = 'No Content'
    response.status = 204
    response.ok = true
  }

  return (response.ok)
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.status))
}

const resolveEndpoint = (endpoint, store) => {
  if (typeof endpoint === 'function') { endpoint = endpoint(store.getState()) }
  if (typeof endpoint !== 'string') { throw new Error('Specify a string endpoint URL.') }
  return endpoint
}

const headers = () => ({
  'Content-Type': 'application/json'
})

const convertToJson = (response) => {
  return (response.status === 204) ? {} : response.text().then((text) => {
    try {
      return JSON.parse(text)
    } catch (e) {
      return { data: text }
    }
  })
}

export const API_CALL = 'API_CALL'

export default store => next => action => {
  if (action.type !== API_CALL) { return next(action) }

  let endpoint = resolveEndpoint(action.endpoint, store)

  if (action.onRequest) {
    next({
      type: action.onRequest,
      request: action
    })
  }
  return fetch(endpoint, {
    method: action.method || 'get',
    headers: headers(),
    body: JSON.stringify(action.body)
  })
    .then(status)
    .then(convertToJson)
    .then(json => {
      next({ type: '404', request: action })
      if (action.onSuccess) {
        next({
          type: action.onSuccess,
          response: json,
          request: { ...action, message: action.onSuccessMessage }
        })
      }
    })
    .catch(error => {
      if (error.message !== '400') {
        next({ type: '404' })
      }

      if (action.onFailure) {
        next({
          type: action.onFailure,
          error: error.message || 'Something bad happened',
          request: { ...action, message: action.onFailureMessage }
        })
      }
    })
}