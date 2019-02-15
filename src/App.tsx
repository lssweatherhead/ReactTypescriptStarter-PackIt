import './App.scss';

import React, { Component } from 'react';
import Home from './pages/home';
import Notes from './pages/notes';

interface IState {
  showNotes: boolean
}

class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showNotes: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <a className="notes-link button is-medium is-outlined" href="" onClick={e => this.toggleNotes(e)}>
          <span className="icon">
            <i className="fas fa-eye"></i>
          </span>
          <span>{ this.state.showNotes ? "Show app" : "See notes"}</span>
        </a>
        {this.state.showNotes ?
          <Notes /> :
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
