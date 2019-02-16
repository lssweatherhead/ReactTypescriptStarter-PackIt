import React, { Component } from 'react';
import PackLocation from '../components/pack-location.component';
import * as models from '../models';

interface IState {
    numberOfPeople: number;
    destination: string;
}

class Home extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            numberOfPeople: 0,
            destination: ""
        };
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

                    <div className="field">
                        <label className="label">Where do you want to go?</label>
                        <div className="control">
                            <input className="input" type="text" value={this.state.destination} onChange={this.handleDestinationChange} placeholder="Destination" />
                        </div>
                    </div>

                    <p>There are {this.state.numberOfPeople} people going on your trip and you are going to {this.state.destination ? this.state.destination : "stay at home"}!</p>
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

    handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            destination: event.target.value
        });
    }
}

export default Home;
