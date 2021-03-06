/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor(props) {
    super(props);
    //this.state = FooterStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    //FooterStore.listen(this.onChange);
    //FooterActions.getTopCharacters();
    console.log('componentDidMount...');

  }

  componentWillUnmount() {
    //FooterStore.unlisten(this.onChange);
    console.log('componentWillUnmount...');
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <h2>This is the demo for the <span className="home__text--red">{ projectName }</span> by <a href={'https://twitter.com/' + ownerName} >@{ ownerName }</a></h2>
        <label className="home__label">Change to your project name:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeProjectName(evt.target.value)); }} defaultValue="React.js Boilerplate" value={projectName} />
        </label>
        <label className="home__label">Change to your name:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="mxstbr" value={ownerName} />
        </label>
        <Link className="btn" to="/readme">Setup</Link>
        <button type="button" className="btn btn-primary">Primary</button>

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
export default connect(select)(HomePage);
