/*
 * ReadmePage
 *
 * This is the page users see when they click the "Setup" button on the HomePage
 */

import React, { Component} from 'react';
import { Link } from 'react-router';

export default class AboutPage2 extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>


        <Link className="btn" to="/">Home</Link>

        <div>{this.props.children}</div>
      </div>
    );
  }
}