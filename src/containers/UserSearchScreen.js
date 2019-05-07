import React from 'react'
import { connect } from 'react-redux'
import TextBox from '../components/TextField'
import { Row, Col, Button, Alert } from 'react-bootstrap'
import ResultItem from './ResultItem'
import Spinner from '../components/Spinner'
import {FILTER_USERS_LIST,getSpecificUsers} from '../actions'

const UserSearchScreen = (props) => {

    return (
        <div>{
            props.showFetchingSpinner ?
                <div>
                    <Row>
                        <Col md={8}>
                            <TextBox label={'Search'} name={'search'} value={props.searchValue} placeholder='enter the username to filter'  onChange={(e)=>{props.filterUsersList(props.usersList,e.target.value)}}/>
                        </Col>
                        <Col md={4}>    
                            <Button variant='primary' onClick={()=>{props.fetchSpecificUser(props.searchValue)}}>Fetch user</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        {
                            props.filteredUserList.length > 0 ?
                            props.filteredUserList.map((user, index) =>
                                <div key={index}>
                                    <ResultItem {...user} />
                                </div>
                            )
                            :
                            <div>
                                <Alert variant='info'>
                                 Click on 'fetch User' button to fetch user from network.
                                </Alert>
                            </div>
                        }
                        </Col>
                    </Row>
                </div>
                :
                <Spinner />
        }
        </div>

    )
}
const mapState = (state) => ({
    usersList: state.usersList || [],
    filteredUserList : state.filteredUserList || state.usersList,
    showFetchingSpinner: !state.showSpinner,
    searchValue:state.searchValue
})
const mapDispatch = (dispatch) => {
    return {
        filterUsersList: (usersList,userName)=>{
            let newList = usersList.filter(user => user.login.indexOf(userName)>-1)
            dispatch({type:FILTER_USERS_LIST,filteredUserList:newList, searchValue:userName})
        },
        fetchSpecificUser: (userName)=>{
            dispatch(getSpecificUsers(userName))
        }
    }
}
export default connect(mapState, mapDispatch)(UserSearchScreen)