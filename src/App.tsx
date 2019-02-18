import './App.scss';

import React, { Component } from 'react';

import Home from './pages/home';
import Notes from './pages/notes';

interface IState {
  showNotes: boolean,
  activeStep: number
}

class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showNotes: false,
      activeStep: 5
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="notes">
          <div className="buttons are-small">
            {this.state.activeStep >= 0 &&
              <a className="button is-text" href={"http://tutorials.lauraweatherhead.co.uk/react-typescript/step-" + (this.state.activeStep - 1)}>
                <span className="icon">
                  <i className="fas fa-arrow-left"></i>
                </span>
                <span>Previous step</span>
              </a>
            }

            <a className="notes-link button is-outlined is-link" href="" onClick={this.toggleNotes}>
              <span className="icon">
                <i className="fas fa-eye"></i>
              </span>
              <span>{ this.state.showNotes ? "Show app" : "See notes"}</span>
            </a>

            {this.state.activeStep < 6 &&
              <a className="button is-text" href={"http://tutorials.lauraweatherhead.co.uk/react-typescript/step-" + (this.state.activeStep + 1)}>
                <span>Next step</span>
                <span className="icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            }
          </div>
        </div>
        {this.state.showNotes ?
          <Notes toggleState={this.toggleNotes} activeStep={this.state.activeStep} /> :
          <Home />
        }
      </React.Fragment>     
    );
  }

  toggleNotes = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.setState({
      showNotes: !this.state.showNotes
    })
  }
}

export default App;