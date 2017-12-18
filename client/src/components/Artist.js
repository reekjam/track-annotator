import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artistId, name }) => {
  return (
    <li>
      <Link to={`/artists/${artistId}/albums`}>{name}</Link>
    </li>
  )
}

export default Artist;
