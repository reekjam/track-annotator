export default (state = {
  messages: [],
}, action) => {
  switch (action.type) {
    case ("SET_ERROR_MESSAGES"):
      return Object.assign({}, state, {
        messages: action.payload.map((message) => {
          return message;
        })
      });
    case ("SET_SUCCESS_MESSAGE"):
      return Object.assign({}, state, { messages: [action.payload] });
    case ("CLEAR_MESSAGES"):
      return Object.assign({}, state, { messages: [] });
    default:
      return state;
  }
}
