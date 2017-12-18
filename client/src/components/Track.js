import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ trackId, name }) => {
  return (
    <li>
      <Link to={`/tracks/${trackId}`}>{name}</Link>
    </li>
  )
}

export default Track;
