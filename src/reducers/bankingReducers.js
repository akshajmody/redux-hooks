
const initialState = {
  balance: 0,
  isSavingsAccount: false
};

//USE SPREAD OPERATOR ...state to keep all parts of the state when changing one part of the state
export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      //LOGIC FOR DEPOSIT
    return { ...state, balance: state.balance + action.amount }
    case "WITHDRAW":
      //LOGIC FOR WITHDRAW
    return { ...state, balance: state.balance - action.amount }
    case "COLLECT_INTEREST":
      //LOGIC FOR COLLECT INTEREST
    return { ...state, balance: state.balance*1.03 }
    case "DELETE_ACCOUNT":
      //LOGIC FOR DELETE ACCOUNT
    return { ...state, balance: 0 }
    case "TOGGLE_ACCOUNT":
      //LOGIC FOR CHANGE ACCOUNT
    return { ...state, isSavingsAccount: !state.isSavingsAccount }
    default:
      return state
  }
  // if (action.type === "DEPOSIT") {
  //   //logic for deposit
  // }
  // if (action.type === "WITHDRAW") {
};

//actions
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