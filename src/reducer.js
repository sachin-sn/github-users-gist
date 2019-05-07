import {FETCH_USERS_LIST_FAILURE,
    FETCH_USERS_LIST_SUCCESS,
    FETCH_USERS_LIST_REQUEST,
    FILTER_USERS_LIST,
FETCH_USER_GISTS_REQUEST,
FETCH_USER_GISTS_FAILURE,
FETCH_USER_GISTS_SUCCESS,
FETCH_GISTS_FORKS_FAILURE,
FETCH_GISTS_FORKS_SUCCESS,
FETCH_GISTS_FORKS_REQUEST,
FETCH_GISTS_FORKS_SELECTED,
FETCH_A_USERS_FAILURE,
FETCH_A_USERS_SUCCESS,
FETCH_A_USERS_REQUEST,
SHOW_SCREEN} from './actions'

export default (state={showScreen:'Users'}, action)=>{
    console.log(action)
    switch(action.type) {
        case FETCH_GISTS_FORKS_SELECTED:{
            return{
                ...state,
            selectedGist:action.gist
        }
        }
        case FETCH_A_USERS_REQUEST:
        case FETCH_GISTS_FORKS_REQUEST:
        case FETCH_USER_GISTS_REQUEST:   
        case FETCH_USERS_LIST_REQUEST:{
            return {
                ...state,
                showSpinner: true
            }
        }
        case FETCH_A_USERS_FAILURE:
        case FETCH_USER_GISTS_FAILURE:
        case FETCH_GISTS_FORKS_FAILURE:
        case FETCH_USERS_LIST_FAILURE:{
            return {
                ...state,
                showSpinner:false,
                showScreen:'Users',
                filteredUserList:null
            }
        }
        case FETCH_USERS_LIST_SUCCESS:{
            return{
                ...state,
                showSpinner:false,
                usersList:action.response
            }
        }
        case FETCH_A_USERS_SUCCESS:{
            let filteredList = state.filteredList || []
            filteredList.push(action.response)
            return{
                ...state,
                showSpinner:false,
                filteredUserList:[...filteredList]
            }
        }
        case FILTER_USERS_LIST:{
            return{
                ...state,
                filteredUserList:[...action.filteredUserList],
                searchValue:action.searchValue
            }
        }
        case FETCH_USER_GISTS_SUCCESS:{
            return {
                ...state,
                showSpinner:false,
                userGists:action.response,
                showScreen:'Gists'

            }
        }
        case FETCH_GISTS_FORKS_SUCCESS:{
            return{
                ...state,
                showSpinner:false,
                fork:action.response,
                showScreen:'Fork'
            }
        }
        case SHOW_SCREEN :{
            return{
                ...state,
                showScreen : 'Users',
                searchValue:'',
                filteredUserList: null
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}