import React from 'react';

const UserTrack = (props) => {
  if (props.track) {
    return <p>{props.track.name}</p>
  }

  return <p>No track</p>
}

export default UserTrack;
