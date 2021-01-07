import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {bankingReducer} from "./reducers/bankingReducers";

const store = createStore(bankingReducer);



ReactDOM.render(<App />, document.getElementById('root'));


//action
//one absolute requirement for action - thats a type parameter


//deposit
const deposit = {
  type: "DEPOSIT",
  amount: 20
}

//withdraw
const withdraw = {
  type: "WITHDRAW",
  amount: 30
}

//collect interest

const collectInterest = {
  type: "COLLECT_INTEREST"
  //Since we are going to providing a fixed interest amount, we don't need to add payload here and can implement the logic of the percentage within the reducer itself rather than the action
}

//delete account
const deleteAccount = {
  type: "DELETE_ACCOUNT"
  //no payload
}