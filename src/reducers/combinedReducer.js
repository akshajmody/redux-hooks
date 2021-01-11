import { combineReducers } from "redux";

import { bankingReducer } from "./bankingReducers";
import { authReducer } from "./authReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer
});


//WHAT THE STORE WILL ULTIMATELY LOOK LIKE
// const store = {
//   auth: {
//     isLoggedIn: false
//   },
//   banking: {
//     balance: 0,
//     isSavingsAccount: false
//   }
// }