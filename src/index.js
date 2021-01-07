import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {bankingReducer} from "./reducers/bankingReducers";

const store = createStore(bankingReducer);

ReactDOM.render(<App />, document.getElementById('root'));