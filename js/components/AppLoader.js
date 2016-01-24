import { asyncChangeProjectName, asyncChangeOwnerName } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import App from './App.react.js';

class AppLoader extends React.Component {
  constructor(props) {
    super(props);
    //this.state = FooterStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //FooterStore.listen(this.onChange);
    //FooterActions.getTopCharacters();
    console.log('componentDidMount...');

    let user = this.props.data.user;

    if (user) {
      if (this.props.location.pathname === '/') {
        this.props.history.pushState(null, 'page2');
      } else {
        this.props.history.pushState(null, this.props.location.pathname);
      }
      
    }

  }

  componentWillUnmount() {
    //FooterStore.unlisten(this.onChange);
    console.log('componentWillUnmount...');

  }

  render() {
    const { pathname } = this.props.location
    const user = this.props.data.user;

    // Only take the first-level part of the path as key, instead of the whole path.
    const key = pathname.split('/')[1] || 'root'

    return (
      <div>
        <App/>
        {this.props.children}
      </div>
    )
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
export default connect(select)(AppLoader);