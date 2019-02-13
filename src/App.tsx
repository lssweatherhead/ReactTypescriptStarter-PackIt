import './App.scss';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="section">
        <div className="container">
          <h1 className="title is-1"><i className="fas fa-map-signs"></i> Let's <span className="site-name">Pack It</span></h1>
          <h2 className="subtitle is-family-secondary is-3">
            Time to get away from it all
          </h2>

          
        </div>
        
      </div>
      <div className="hero">
        <div className="container">
          <p>let's go</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
