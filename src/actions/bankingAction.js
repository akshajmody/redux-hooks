const deposit = (amount) => {
  return { type: "DEPOSIT", amount: parseInt(amount) }
}

const withdraw = (amount) => {
  return { type: "WITHDRAW", amount: parseInt(amount) }
}

const collectInterest = () => {
  return { type: "COLLECT_INTEREST" }
}

const deleteAccount = () => {
  return { type: "DELETE_ACCOUNT" }
}

