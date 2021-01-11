import React, { useState } from 'react';

const Banking = () => {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {

  };
  const handleWithdraw = () => {

  };
  const handleCollectInterest = () => {

  };
  const handleDelete = () => {

  };
  const handleAccountChange = () => {

  };


  return (
    <div className="form-group">
      <input value={ amount } onChange={(e) => e.target.value} type="text" className="form-control"/>
      <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
      <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
      <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
      <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
      <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
    </div>
  )
}

export default Banking
