import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginButton from '../components/LoginButton';
import Main from '../components/Main';
import { setUserToken } from '../actions/authActions';

class App extends Component {
  constructor() {
    super();

    this.cacheUserToken = this.cacheUserToken.bind(this);
    this.cachedUserToken = this.cachedUserToken.bind(this);
  }

  componentWillMount() {
    sessionStorage.getItem('token') ? this.cachedUserToken() : this.cacheUserToken();
  }

  cachedUserToken() {
    this.props.setUserToken(sessionStorage.getItem('token'));
  }

  cacheUserToken() {
    if (this.props.location.search) {
      const paramsString = this.props.location.search;
      const searchParams = new URLSearchParams(paramsString);
      const token = searchParams.get('token');

      sessionStorage.setItem('token', token);
      this.props.setUserToken(token);
    }
  }

  render() {
    return this.props.token ? <Main token={this.props.token} /> : <LoginButton />
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authentication.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
