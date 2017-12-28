export default (state = {
  spotifyToken: '',
  tracks: [],
  username: ''
}, action) => {
  switch (action.type) {
    case ("SET_USER"):
      return Object.assign({}, state, { username: action.payload });
    case ("SET_USER_TRACKS"):
      return Object.assign({}, state, { tracks: action.payload });
    default:
      return state;
  }
}
