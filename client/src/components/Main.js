import React from 'react';
import { Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import SearchFormContainer from '../containers/SearchFormContainer';
import AlbumContainer from '../containers/AlbumContainer';
import ArtistAlbumsContainer from '../containers/ArtistAlbumsContainer';
import TrackContainer from '../containers/TrackContainer';
import UserTracksContainer from '../containers/UserTracksContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <NavLinks />
        <Route exact path="/search" render={(props) => <SearchFormContainer token={this.props.token} {...props} />} />
        <Route exact path="/albums/:id" render={(props) => <AlbumContainer token={this.props.token} {...props} />} />
        <Route exact path="/artists/:id/albums" render={(props) => <ArtistAlbumsContainer token={this.props.token} {...props} />} />
        <Route exact path="/my-tracks" render={(props) => <UserTracksContainer token={this.props.token} {...props} />} />
        <Route exact path="/tracks/:id" render={(props) => <TrackContainer token={this.props.token} {...props} />} />
      </div>
    );
  }
}
