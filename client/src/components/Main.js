import React from 'react';
import { Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import SearchFormContainer from '../containers/SearchFormContainer';
import TracksContainer from '../containers/TracksContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <NavLinks />
        <Route exact path="/search" render={(props) => <SearchFormContainer token={this.props.token} {...props} />} />
        <Route exact path="/artists/:id/tracks" render={(props)=> <TracksContainer token={this.props.token} {...props} />} />
      </div>
    );
  }
}
