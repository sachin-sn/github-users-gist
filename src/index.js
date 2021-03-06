import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import api from './api'
import createSagaMiddleware from 'redux-saga'
import { put } from 'redux-saga/effects'
import {getUsersList} from './actions'


function * sagas() {
    yield put(getUsersList())
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(api, sagaMiddleware))
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
