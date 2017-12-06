import React from 'react';

export default class Tracks extends React.Component {
  componentWillMount() {
    this.props.getArtistTracks(this.props.artistId);
  }

  render() {
    return (
      <p>{`artist id: ${this.props.artistId}`}</p>
    )
  }
}
