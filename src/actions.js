import { API_CALL } from './api'

export const SHOW_SCREEN = 'SHOW_SCREEN'

export const FETCH_USERS_LIST_REQUEST =  'FETCH_USERS_LIST_REQUEST'
export const FETCH_USERS_LIST_SUCCESS =  'FETCH_USERS_LIST_SUCCESS'
export const FETCH_USERS_LIST_FAILURE =  'FETCH_USERS_LIST_FAILURE'
export const getUsersList = () =>({
    type:API_CALL,
    method:'GET',
    endpoint:'https://api.github.com/users',
    onRequest:FETCH_USERS_LIST_REQUEST,
    onSuccess:FETCH_USERS_LIST_SUCCESS,
    onFailure:FETCH_USERS_LIST_FAILURE

})

export const FILTER_USERS_LIST = 'FILTER_USERS_LIST'

export const FETCH_USER_GISTS_REQUEST =  'FETCH_USER_GISTS_REQUEST'
export const FETCH_USER_GISTS_SUCCESS =  'FETCH_USER_GISTS_SUCCESS'
export const FETCH_USER_GISTS_FAILURE =  'FETCH_USER_GISTS_FAILURE'
export const getUserGists = (userName) =>({
    type:API_CALL,
    method:'GET',
    endpoint:`https://api.github.com/users/${userName}/gists`,
    onRequest:FETCH_USER_GISTS_REQUEST,
    onSuccess:FETCH_USER_GISTS_SUCCESS,
    onFailure:FETCH_USER_GISTS_FAILURE

})

export const FETCH_GISTS_FORKS_SELECTED =  'FETCH_GISTS_FORKS_SELECTED'
export const FETCH_GISTS_FORKS_REQUEST =  'FETCH_GISTS_FORKS_REQUEST'
export const FETCH_GISTS_FORKS_SUCCESS =  'FETCH_GISTS_FORKS_SUCCESS'
export const FETCH_GISTS_FORKS_FAILURE =  'FETCH_GISTS_FORKS_FAILURE'
export const getGistsForks = (id) =>({
    type:API_CALL,
    method:'GET',
    endpoint:`https://api.github.com/gists/${id}/forks`,
    onRequest:FETCH_GISTS_FORKS_REQUEST,
    onSuccess:FETCH_GISTS_FORKS_SUCCESS,
    onFailure:FETCH_GISTS_FORKS_FAILURE

})