import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {Row, Col} from 'react-bootstrap'
import UserSearchScreen from './containers/UserSearchScreen'
import GistsScreen from './containers/GistsScreen'
import GistScreenDetails from './containers/GistItemsDetails'
import Breadcrumb from './containers/Breadcrumb'

const App = (props)=> {
  return (
    <div className="App">
    <Row>
      <Col md={12}>
        <Breadcrumb />
      </Col>
    </Row>
    <Row>
      <Col md={3}></Col>
      <Col md={6} style={{backgroundColor:'#eee'}}>
      <h1>Github users' gists</h1>
      {
        props.showScreen === 'Users' ?
        <UserSearchScreen />
        : props.showScreen==='Gists'? <GistsScreen /> : <GistScreenDetails/>
      }

      </Col>
      <Col md={3}></Col>
    </Row>
    </div>
  );
}

const mapState=(state)=>({
...state
})
const mapDispatch=(dispatch)=>{
  return{

  }
}
export default connect (mapState,mapDispatch)(App)
