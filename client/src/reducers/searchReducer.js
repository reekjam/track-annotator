export default (state = {
  results: [],
}, action) => {
  switch(action.type) {
    case ('UPDATE_SEARCH_RESULTS'):
      return Object.assign({}, state, { results: action.payload })
    default:
      return state;
  }
}
