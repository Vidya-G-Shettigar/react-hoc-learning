import React, { Component } from 'react';

const HOComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0
      }
    }

    handleClick = () => {
      this.setState({ counter: this.state.counter + 1 });
    }

    render() {
      return <OriginalComponent
        handleClick={this.handleClick}
        name={this.state.counter}>
      </OriginalComponent>;
    }
  }
  return NewComponent;
}

export default HOComponent;
