import React, { Component } from 'react';
import * as models from '../models';

interface IProps {
    location: models.IPotentialPlace
} 

interface IState { }

// always start component names with a capital letter - read more here: https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
class PackLocation extends Component<IProps, IState> {
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={"http://lorempixel.com/400/250/city/" + this.props.location.maxOccupancy} alt={this.props.location.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-size-5">{this.props.location.name}</p>
              <p className="is-family-secondary">Max occupancy: {this.props.location.maxOccupancy}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PackLocation;
