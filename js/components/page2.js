import React, { Component} from 'react';
import { Link } from 'react-router';

export default class Page2 extends React.Component {
  render() {
    const { pathname } = this.props.location

    return (
      <div className="Image">
        <h1>Page 2</h1>
        <ul>
          <li><Link to="/page2/tab1">Tab 1</Link></li>
          <li><Link to="/page2/tab2">Tab 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}