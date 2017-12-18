import React from 'react';

const Track = ({ artist, name, uri }) => {
  return (
    <div>
      <div>
        <p>{`${artist} - ${name}`}</p>
        {uri ? <iframe src={`https://open.spotify.com/embed?uri=${uri}`} title={name} /> : ""}
      </div>
      <div>
        <button>Save To My Tracks</button>
      </div>
    </div>
  )
}

export default Track;
