export default (state = {
  tracks: [],
}, action) => {
  switch (action.type) {
    case ("SET_ALBUM_TRACKS"):
      return Object.assign({}, state, { tracks: action.payload });
    default:
      return state;
  }
}
