import React, { Component } from 'react';
import './style.css';
import HOComponent from './HOComponent';

class App extends Component {
  render() {
    return <button onClick={this.props.handleClick}>{this.props.name}</button>;
  }
}

export default HOComponent(App);
