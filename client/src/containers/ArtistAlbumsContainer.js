import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArtistAlbums from '../components/ArtistAlbums';

class ArtistAlbumsContainer extends React.Component {
  render() {
    return (
      <ArtistAlbums albums={this.props.albums} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.search.results,
  }
}

export default connect(mapStateToProps)(ArtistAlbumsContainer)
