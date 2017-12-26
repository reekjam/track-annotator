import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTrack } from '../helpers/spotify';
import { setTrack } from '../actions/trackActions';
import {
  setErrorMessages,
  setSuccessMessage,
 } from '../actions/notificationActions';
import { saveUserTrack } from '../helpers/api';
import Track from '../components/Track';

class TrackContainer extends React.Component {
  async componentWillMount() {
    const track = await getTrack(this.props.token, this.props.match.params.id);
    this.props.setTrack(track);
  }

  render() {
    return (
      <Track
        {...this.props}
        clickHandlerCallback={saveUserTrack} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.track,
    ...state.notification,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setErrorMessages,
    setSuccessMessage,
    setTrack,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackContainer);
