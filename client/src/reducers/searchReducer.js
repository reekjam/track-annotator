export default (state = {
  results: [],
  type: 'artist',
}, action) => {
  switch(action.type) {
    case ("UPDATE_SEARCH_RESULTS"):
      return Object.assign({}, state, { results: action.payload });
    case ("UPDATE_SEARCH_TYPE"):
      return Object.assign({}, state, { type: action.payload });
    default:
      return state;
  }
}
