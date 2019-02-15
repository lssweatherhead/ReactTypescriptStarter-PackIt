import React, { Component } from 'react';

interface IProps {
    name: string
} 

interface IState { }

// always start component names with a capital letter - read more here: https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
class PackLocation extends Component<IProps, IState> {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default PackLocation;
