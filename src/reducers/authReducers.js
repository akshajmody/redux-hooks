

const initState = {
  isLoggedIn: false,
  //username
  //password
  //authenticated
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return {...state, isLoggedIn: !state.isLoggedIn}
    default:
      return state;
  }
};