

const initState = {
  isLoggedIn: false,
  //username
  //password
  //authenticated
}

  export const authReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return {...state, isLoggedIn: !state.isLoggedIn}
    default:
      return state;
  }
};