import './App.scss';

import React, { Component } from 'react';

import Home from './pages/home';
import Notes from './pages/notes';

interface IState {
  showNotes: boolean,
  activeStep?: number
}

interface IProps {
  currentStep: number
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showNotes: false,
      activeStep: props.currentStep
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="notes">
          <div className="buttons">
            {this.props.currentStep > 0 &&
              <a className="button is-text" href={"http://tutorials.lauraweatherhead.co.uk/react-typescript/step-" + (this.props.currentStep - 1)}>
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
              <span>{ this.state.showNotes ? "Show app [step " + this.props.currentStep + "]" : "See notes [step " + this.props.currentStep + "]"}</span>
            </a>

            {this.props.currentStep < 6 &&
              <a className="button is-text" href={"http://tutorials.lauraweatherhead.co.uk/react-typescript/step-" + (this.props.currentStep + 1)}>
                <span>Next step</span>
                <span className="icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            }
          </div>
        </div>
        {this.state.showNotes ?
          <Notes toggleState={this.toggleNotes} activeStep={this.state.activeStep} setActiveStep={this.toggleActiveStep} /> :
          <Home />
        }
      </React.Fragment>     
    );
  }

  toggleActiveStep = (stepNumber?: number) => {
    this.setState({
      activeStep: stepNumber
    });
  }

  toggleNotes = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    this.setState({
      showNotes: !this.state.showNotes
    });
  }
}

export default App;