import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers'

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

render(
    <Provider store={store}>
    <App/>
</Provider>, document.querySelector('#root'));