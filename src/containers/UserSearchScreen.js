import React from 'react'
import { connect } from 'react-redux'
import TextBox from '../components/TextField'
import { Row, Col } from 'react-bootstrap'
import ResultItem from './ResultItem'
import Spinner from '../components/Spinner'
import {FILTER_USERS_LIST} from '../actions'

const UserSearchScreen = (props) => {
    return (

        <div>{
            props.showFetchingSpinner ?
                <div>
                    <Row>
                        <Col md={12}>
                            <TextBox label={'Search'} name={'search'} value={props.searchValue} placeholder='enter the username to filter'  onChange={(e)=>{props.filterUsersList(props.usersList,e.target.value)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        {
                            props.filteredUserList.map((user, index) =>
                                <div key={index}>
                                    <ResultItem {...user} />
                                </div>
                            )
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
    showFetchingSpinner: !state.showSpinner
})
const mapDispatch = (dispatch) => {
    return {
        filterUsersList: (usersList,userName)=>{
            let newList = usersList.filter(user => user.login.indexOf(userName)>-1)
            dispatch({type:FILTER_USERS_LIST,filteredUserList:newList, searchValue:userName})
        }
    }
}
export default connect(mapState, mapDispatch)(UserSearchScreen)