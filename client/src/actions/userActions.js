export function setUser(username) {
  return { type: "SET_USER", payload: username };
}

export function setUserTracks(tracks) {
  return { type: "SET_USER_TRACKS", payload: tracks };
}
