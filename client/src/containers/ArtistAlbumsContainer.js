import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArtistAlbums } from '../helpers/spotify';
import { setArtistAlbums } from '../actions/artistActions';
import ArtistAlbums from '../components/ArtistAlbums';

class ArtistAlbumsContainer extends React.Component {
  async componentWillMount() {
    const albums = await getArtistAlbums(this.props.token, this.props.match.params.id);
    this.props.setArtistAlbums(albums);
  }

  render() {
    return (
      <ul>
        <ArtistAlbums {...this.props} />
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.artist}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setArtistAlbums
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAlbumsContainer)
