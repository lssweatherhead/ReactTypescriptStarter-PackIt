import React, { Component } from 'react';
import PackLocation from '../components/pack-location.component';
import * as models from '../models';

interface IState {
    numberOfPeople: number;
}

class Home extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            numberOfPeople: 0
        };
    }

    componentDidMount() {
      console.log("Home component mounted!")
    }

    componentDidUpdate(prevProps: any, prevState: IState) {
      console.log("Used to have: " + prevState.numberOfPeople + " people, but now have: " + this.state.numberOfPeople + " people");
    }
    
    componentWillUnmount() {
        console.log("Home component unmounted");
    }

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

            <div className="section">
                <div className="container">
                <label className="label">How many people are going away?</label>
                    <div className="buttons">
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 1)}>1 person</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 2)}>2 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 3)}>3 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 4)}>4 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 5)}>5 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 6)}>6 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 7)}>7 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 8)}>8 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 9)}>9 people</a>
                        <a className="button is-primary is-outlined" onClick={e => this.updateNumberPeople(e, 10)}>10 people</a>
                    </div>
                    <p>There are {this.state.numberOfPeople} people going on your trip!</p>
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

    updateNumberPeople = (event: React.MouseEvent<HTMLAnchorElement>, numberPeople: number) => {
        event.preventDefault();
        this.setState({
            numberOfPeople: numberPeople
        });
    }
}

export default Home;
