import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbumTracks } from '../helpers/spotify';
import { setAlbumTracks } from '../actions/albumActions';
import Album from '../components/Album';

class AlbumContainer extends React.Component {
  async componentWillMount() {
    const tracks = await getAlbumTracks(this.props.token, this.props.match.params.id);
    this.props.setAlbumTracks(tracks);
  }

  render() {
    return (
      <ul>
        <Album {...this.props} />
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.album};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAlbumTracks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer)
