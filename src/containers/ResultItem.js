import React from 'react'
import {connect} from 'react-redux'
import { Col, Row, Image } from 'react-bootstrap'
import ButtonField from '../components/ButtonField'
import {getUserGists} from '../actions'

const ResultItem = (props) => {
    return (
        <Row style={{border:'1px solid #333',padding:'20px',margin:'20px', backgroundColor:'#fff', borderRadius:'10px' }}>
            <Col md={6}>
                <Image src={props.avatar_url} alt={props.login} />
            </Col>
            <Col md={6}>
                Username:&nbsp;<b>{props.login}</b><br /><br/>
                <ButtonField name={`Get ${props.login} gists`} onClick={()=>{props.userGistsLink(props.login)}}/>                
            </Col>
        </Row>
    )
}

const mapState = (state) => ({
    ...state
})

const mapDispatch = (dispatch) =>{
    return{
        userGistsLink : (userName) =>{
            dispatch(getUserGists(userName))
        }
    }
}


export default connect(mapState,mapDispatch)(ResultItem)