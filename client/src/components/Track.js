import React from 'react';
import NotificationPortal from './NotificationPortal';

export default class Track extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      artist,
      clickHandlerCallback,
      name,
      setErrorMessages,
      setSuccessMessage,
      spotifyId,
      spotifyUri,
      token,
    } = this.props;

    const request = clickHandlerCallback(token, { artist, name, spotifyId, spotifyUri });
    
    request.then((response) => {
      if (response.status === 200) {
        return setSuccessMessage(response.message);
      }
      return setErrorMessages(response.message);
    })
  }

  render() {
    const {
      artist,
      name,
      spotifyUri
    } = this.props;

    return (
      <div>
        <div>
          <p>{`${artist} - ${name}`}</p>
          {spotifyUri ? <iframe src={`https://open.spotify.com/embed?uri=${spotifyUri}`} title={name} /> : ""}
        </div>
        <div>
          <button onClick={this.handleClick}>Save To My Tracks</button>
        </div>
        <NotificationPortal />
      </div>
    )
  }
}
