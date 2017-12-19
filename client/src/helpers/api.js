import { authHeaders } from '../helpers/auth';

export function getUserTracks(token) {
  const headers = authHeaders(token);
  return fetch("/api/v1/tracks", { headers })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    return data;
  })
}

export function saveUserTrack(token, payload) {
  const headers = authHeaders(token);
  const body = {
    track: {
      artist: payload.artist,
      name: payload.name,
      spotify_uri: payload.uri,
    }
  }

  return fetch("/api/v1/tracks", {
    headers: headers,
    method: "POST",
    body: JSON.stringify(body)
  })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    return data
  })
}
