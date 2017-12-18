export default (state = {
  albums: [],
}, action) => {
  switch (action.type) {
    case ("SET_ARTIST_ALBUMS"):
      return Object.assign({}, state, { albums: action.payload })
    default:
      return state;
  }
}
