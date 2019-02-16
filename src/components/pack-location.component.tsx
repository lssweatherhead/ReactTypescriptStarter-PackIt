import React, { Component } from 'react';
import * as models from '../models';

interface IProps {
    location: models.IPackLocation
} 

interface IState { }

// always start component names with a capital letter - read more here: https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
class PackLocation extends Component<IProps, IState> {
  render() {
    return (
      <div>{this.props.location.name}</div>
    );
  }
}

export default PackLocation;
