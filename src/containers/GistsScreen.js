import React from 'react'
import {connect} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import GistItem from './GistItems'
import {getGistsForks, FETCH_GISTS_FORKS_SELECTED} from '../actions'

const GistsScreen = (props) => {
    return(
        <div>
            <Row>
                <Col md={12}>
                    {
                        props.gistItems.map((gist,index)=>
                        <div key={index}>
                            <GistItem {...gist} onClick={props.ShowGistDetails}/>
                        </div>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}
const mapState = (state) =>({
    gistItems : state.userGists || []
})
const mapDispatch = (dispatch) =>{
    return{
        ShowGistDetails : (gistItem)=>{
            dispatch({type:FETCH_GISTS_FORKS_SELECTED,gist:gistItem})
            dispatch(getGistsForks(gistItem.id))
        }
    }
}

export default connect(mapState,mapDispatch)(GistsScreen)