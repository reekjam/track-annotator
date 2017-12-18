import { authHeaders } from '../helpers/auth';

export function getArtistAlbums(token, artistId) {
  const headers = authHeaders(token)
  return fetch(`/api/v1/spotify/artists/${artistId}/albums`, { headers })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    return data['items'];
  })
  .then((items) => {
    return items;
  })
}

export function getAlbumTracks(token, albumId) {
  const headers = authHeaders(token)
  return fetch(`/api/v1/spotify/albums/${albumId}/tracks`, { headers })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    return data['tracks']['items'];
  })
  .then((items) => {
    return items;
  })
}

export function getTrack(token, trackId) {
  const headers = authHeaders(token);

  return fetch(`/api/v1/spotify/tracks/${trackId}`, { headers })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    return data;
  })
}

export function search(token, query, type) {
  const headers = authHeaders(token);

  return fetch(`/api/v1/spotify/search?q=${encodeURI(query)}&type=${encodeURI(type)}`, { headers })
  .then((response) => {
    return response.json();
  })
  .then(({data}) => {
    const typeKey = `${type}s`;
    const { items } = data[typeKey];
    return items;
  })
}
