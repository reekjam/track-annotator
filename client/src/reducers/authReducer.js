export default (state = {
  token: ''
}, action) => {
  switch (action.type) {
    case ("SET_USER_TOKEN"):
      return Object.assign({}, state, { token: action.payload });
    default:
      return state;
  }
}
