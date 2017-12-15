export default (state = {
  username: ''
}, action) => {
  switch (action.type) {
    case ('SET_USER'):
      return Object.assign({}, state, { username: action.payload });
    default:
      return state;
  }
}
