import React, { Component } from 'react';
import PackLocation from '../components/pack-location.component';
import * as models from '../models';

class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="section is-regular">
          <div className="container">
            <h1 className="title is-1"><i className="fas fa-map-signs"></i> Let's <span className="site-name">Pack It</span></h1>
            <h2 className="subtitle is-family-secondary is-3">
              Time to get away from it all
            </h2>
          </div>
          
        </div>
        <div className="hero">
          <div className="container">
            <PackLocation location={new models.PotentialPlace("Location 1: A nice house in the Cotswolds")} />
            <PackLocation location={new models.PotentialPlace("Location 2: A farmhouse in Shrewsbury")} />
            <PackLocation location={new models.PotentialPlace("Location 3: A city centre apartment in Manchester")} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
