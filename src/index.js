import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import {carReducer} from './Reducers/carReducer'
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(combineReducers ({carReducer}));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
,rootElement);
