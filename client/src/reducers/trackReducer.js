export default (state = {
  artist: '',
  name: '',
  uri: '',
}, action) => {
  switch (action.type) {
    case ("SET_TRACK"):
      return Object.assign({}, state, {
        artist: action.payload.artist,
        name: action.payload.name,
        uri: action.payload.uri,
      });
    default:
      return state;
  }
}
