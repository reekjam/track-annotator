import React from 'react';
import ArtistResult from './ArtistResult';
import TrackResult from './TrackResult';

function resultByType(type, result) {
  switch (type) {
    case ("artist"):
      return <ArtistResult result={result} />;
    case ("track"):
      return <TrackResult result={result} />;
    default:
      return "";
  }
}

const SearchResults = ({results, type}) => {
  return results.map((result) => {
    return (
      <li key={result.id}>
        {resultByType(type, result)}
      </li>
    )
  })
}

export default SearchResults;
