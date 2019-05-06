import React from 'react'
import {connect} from 'react-redux'
import {SHOW_SCREEN} from '../actions'
import {Button} from 'react-bootstrap'
import Home from '../home.svg'

const Breadcrumb = (props) => {
    console.log(props)
    return(
        <div style={{fontSize:'20px'}}>
        
            {
                props.showScreen!=='Users' ? 
                <span><Button variant='link' onClick={()=>{props.redirectToHome('Users')}}><img src={Home} style={{width:'20px', height:'20px'}} alt='home'/>Home</Button>&nbsp;</span>
                : null
            }
        </div>
    )
}

const mapState = (state) => ({
    showScreen : state.showScreen || 'Users'
})
const mapDispatch = (dispatch) =>{
    return{
        redirectToHome : (item)=>{
            dispatch({type:SHOW_SCREEN, screen:item})
        }
    }
}

export default connect(mapState,mapDispatch)(Breadcrumb)