import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserTracks } from '../helpers/api';
import UserTracks from '../components/UserTracks';

class UserTracksContainer extends React.Component {
  render() {
    return <UserTracks tracks={this.props.tracks} />
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.user.tracks
  }
}

export default connect(mapStateToProps)(UserTracksContainer)
