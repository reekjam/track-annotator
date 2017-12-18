import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({ tracks }) => {
  return tracks.map((track) => {
    return (
      <li key={track.id}>
        <Link to={`/tracks/${track.id}`}>{track.name}</Link>
      </li>
    )
  })
}

export default Album;
