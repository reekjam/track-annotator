import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserTracks } from '../helpers/api';
import { setUserTracks } from '../actions/userActions';
import { getCurrentTrack } from '../reducers/userReducer';
import UserTrack from '../components/UserTrack';

class UserTrackContainer extends React.Component {
  componentWillMount() {
    if (!this.props.track) {
      const userTracksRequest = getUserTracks(this.props.token);
      userTracksRequest.then((response) => {
        if (response.status === 200) {
          this.props.setUserTracks(response.tracks);
        }
      })
    }
  }

  render() {
    return <UserTrack track={this.props.track} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    track: getCurrentTrack(state.user.tracks, ownProps.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserTracks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTrackContainer);
