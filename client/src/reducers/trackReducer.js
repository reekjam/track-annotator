export default (state = {
  artist: '',
  name: '',
  spotifyId: '',
  spotifyUri: '',
}, action) => {
  switch (action.type) {
    case ("SET_TRACK"):
      return Object.assign({}, state, {...action.payload});
    default:
      return state;
  }
}
