import React from 'react';

function renderNotificationMessages(messages, callback) {
  return messages.map((message, i) => {
    return <span key={`message-${i}`} onClick={callback}>{message}</span>;
  });
}

const Notification = ({
  clearNotificationMessages,
  messages,
}) => {
  return messages.length > 0 ? renderNotificationMessages(messages, clearNotificationMessages) : ""
}

export default Notification
