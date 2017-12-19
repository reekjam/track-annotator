import React from 'react';

export default class Track extends React.Component {
  constructor() {
    super();

    this.state = {
      error: '',
      isSaving: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const {
      artist,
      clickHandlerCallback,
      name,
      token,
      uri,
    } = this.props;

    const response = await clickHandlerCallback(token, { artist, name, uri });
    console.log('response: ', response);
  }

  render() {
    const {
      artist,
      name,
      uri
    } = this.props;

    return (
      <div>
        <div>
          <p>{`${artist} - ${name}`}</p>
          {uri ? <iframe src={`https://open.spotify.com/embed?uri=${uri}`} title={name} /> : ""}
        </div>
        <div>
          <button onClick={this.handleClick}>Save To My Tracks</button>
        </div>
      </div>
    )
  }
}
