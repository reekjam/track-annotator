import React from 'react';
import { Link } from 'react-router-dom';

const TrackResult = ({ result }) => {
  const { artists, id, name } = result;
  
  return <Link to={`/tracks/${id}`}>{`${artists[0].name} - ${name}`}</Link>;
}

export default TrackResult;
