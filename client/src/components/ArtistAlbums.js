import React from 'react';

export default class ArtistAlbums extends React.Component {
  render() {
    return this.props.albums.map((album) => {
      return (
        <p>{album.name}</p>
      )
    })
  }
}
