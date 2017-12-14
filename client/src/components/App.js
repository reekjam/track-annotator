import React, { Component } from 'react';
import LoginButton from './LoginButton';
import Main from './Main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: ''
    }
  }

  componentWillMount() {
    if (this.props.location.search) {
      const paramsString = this.props.location.search;
      const searchParams = new URLSearchParams(paramsString);
      const username = searchParams.get('username');

      sessionStorage.setItem('username', username);
      this.setState({ username: username });
    }
  }

  render() {
    const { username } = this.state;

    if (username) {
      return <Main />
    }

    return <LoginButton />
  }
}

export default App;
