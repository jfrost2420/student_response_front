/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../img/logo.png';
import { asyncChangeProjectName, asyncChangeOwnerName, loginUser } from '../actions/AppActions';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  handleSignClick(event) {
    event.preventDefault();
    console.log(event);
    this.props.dispatch(asyncChangeProjectName('tester'));
    //this.props.dispatch(loginUser('john','123'));
  }

  render() {
    const { projectName, ownerName, user } = this.props.data;
    var loggedIn;
    if (user) {
      loggedIn = 'Yes';
    } else {
      loggedIn = 'No';
    }
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">{ projectName }  ({ loggedIn })</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <button className="btn btn-success" onClick={(e) => this.handleSignClick(e)}>Sign</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          { this.props.children }
        </div>
      </div>
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
export default connect(select)(App);
