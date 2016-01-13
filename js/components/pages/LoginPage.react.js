/*
 * LoginPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import auth from '../../api/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    //this.state = FooterStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //FooterStore.listen(this.onChange);
    //FooterActions.getTopCharacters();
    console.log('componentDidMount...');

    if(this.props.data.user) {
      this.props.history.pushState(null, '/page2');
    }

  }

  componentWillUnmount() {
    //FooterStore.unlisten(this.onChange);
    console.log('componentWillUnmount...');
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    var func = function(loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    }

    auth.login(email, pass, func.bind(this))
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
