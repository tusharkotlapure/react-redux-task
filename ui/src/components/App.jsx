import React, { Component } from 'react';
import 'styles/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
      	This is react redux starterkit
        { this.props.children }
      </div>
    );
  }
}
