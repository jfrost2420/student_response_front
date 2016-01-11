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

class App extends Component {
  render() {
    const { projectName, ownerName } = this.props.data;
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
              <a className="navbar-brand" href="#">{ projectName }</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" placeholder="Email" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Sign</button>
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
