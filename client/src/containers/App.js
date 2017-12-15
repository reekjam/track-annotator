import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginButton from '../components/LoginButton';
import Main from '../components/Main';
import { setUser } from '../actions/userActions';

class App extends Component {
  componentWillMount() {
    if (this.props.location.search) {
      const paramsString = this.props.location.search;
      const searchParams = new URLSearchParams(paramsString);
      const username = searchParams.get('username');

      this.props.setUser(username);
    }
  }

  render() {
    return this.props.username ? <Main /> : <LoginButton />
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
