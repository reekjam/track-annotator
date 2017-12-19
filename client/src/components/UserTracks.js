import React from 'react';
import { Link } from 'react-router-dom';

function renderTracks(tracks) {
  return tracks.map((track) => {
    return <Link to={`/my-tracks/${track.id}`}>{`${track.artist} - ${track.name}`}</Link>
  })
}

function noTracksToDisplay() {
  return (
    <p>No tracks to display.</p>
  )
}

const UserTracks = ({ tracks }) => {
  return tracks.length > 0 ? renderTracks(tracks) : noTracksToDisplay();
}

export default UserTracks;
