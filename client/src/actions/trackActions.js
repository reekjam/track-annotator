export function setTrack(track) {
  return {
    type: "SET_TRACK",
    payload: {
      artist: track.artists[0].name,
      name: track.name,
      spotifyId: track.id,
      spotifyUri: track.uri
    }
  };
}
