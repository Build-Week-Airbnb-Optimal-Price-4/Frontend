import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/Reducer';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));