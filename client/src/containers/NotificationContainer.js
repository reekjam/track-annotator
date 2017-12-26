import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  clearNotificationMessages,
} from '../actions/notificationActions';
import Notification from '../components/Notification';

class NotificationContainer extends React.Component {
  render() {
    return <Notification {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {...state.notification}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearNotificationMessages,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
