import React from 'react';
import ReactDOM from 'react-dom';
import NotificationContainer from '../containers/NotificationContainer';

export default class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <NotificationContainer />,
      document.getElementById('notification-portal')
    )
  }
}
