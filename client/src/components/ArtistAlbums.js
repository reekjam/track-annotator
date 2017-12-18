import React from 'react';
import { Link } from 'react-router-dom';

export default class ArtistAlbums extends React.Component {
  render() {
    return this.props.albums.map((album) => {
      return (
        <li key={album.id}>
          <Link to={`/albums/${album.id}`}>
            <div>
              <p>{album.name}</p>
              <img src={album.images[2].url} alt={album.name} />
            </div>
          </Link>
        </li>
      )
    })
  }
}
