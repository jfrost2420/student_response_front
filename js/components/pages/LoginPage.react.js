/*
 * LoginPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import auth from '../../api/auth';
import { login } from '../../api/index';


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.data.user) {
      this.props.history.pushState(null, '/page2');
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    /*
    var func = function(loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      this.props.dispatch(toggleUser(true))
      
      if (location.state && location.state.nextPathname) {
        this.props.history.pushState({},location.state.nextPathname)
      } else {
        this.props.history.pushState({},'/page2')
      }
    }

    auth.login(email, pass, func.bind(this))
    */

    login('tester', '123').then(function(results) {
      console.log(results.body);
    }, function(error) {
      console.log(error);
    });
  }

  render() {
    const { pathname } = this.props.location
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
        <button type="submit">login</button>
      </form>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginPage);
