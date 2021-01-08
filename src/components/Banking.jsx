import React from 'react'

const Banking = () => {
  return (
    <div className="form-group">
      <input type="text" className="form-control"/>
      <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
      <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
      <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
      <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
      <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
    </div>
  )
}

export default Banking
