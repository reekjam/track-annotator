import React from 'react';
import { Link } from 'react-router-dom';

const ArtistResult = ({ result }) => {
  const { id, name } = result;

  return <Link to={`/artists/${id}/albums`}>{name}</Link>;
}

export default ArtistResult;
