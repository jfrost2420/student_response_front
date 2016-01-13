/*
 * LoginPage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component} from 'react';
import { Link } from 'react-router';

export default class LoginPage extends Component {
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
  render() {
    var s = 'test';
    return (
      <div>
        <h2>Login</h2>
        <Link className="btn" to="/">Home</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
