import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserTracks } from '../helpers/api';
import { setUserTracks } from '../actions/userActions';
import UserTracks from '../components/UserTracks';

class UserTracksContainer extends React.Component {
  componentWillMount() {
    const userTracksRequest = getUserTracks(this.props.token);
    userTracksRequest.then((response) => {
      if (response.status === 200) {
        this.props.setUserTracks(response.tracks);
      }
    })
  }

  render() {
    return <UserTracks tracks={this.props.tracks} />
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authentication.token,
    tracks: state.user.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserTracks,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTracksContainer)
