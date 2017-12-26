export function setErrorMessages(messages) {
  return { type: "SET_ERROR_MESSAGES", payload: messages };
}

export function setSuccessMessage(messages) {
  return { type: "SET_SUCCESS_MESSAGE", payload: messages };
}

export function clearNotificationMessages() {
  return { type: "CLEAR_MESSAGES" }
}
