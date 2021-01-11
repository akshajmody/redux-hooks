import React from "react";
import { useSelector } from "react-redux";


const Balance = () => {
  const balance = useSelector(state => state.banking.balance);

  const store = useSelector(state => state);
  console.log(store);

  if (store.auth.isLoggedIn === true ) {
    return (
      <div>
        <h1>${balance.toFixed(2)}</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Log In to Check Balance</h1>
      </div>
    )
  }
  // return (
  //   <div>
  //     <h1>${store.balance}</h1>
  //   </div>
  // )
}

export default Balance
