import React, { Component } from 'react';
import PackLocation from '../components/pack-location.component';
import data from '../data/locations.json';
import * as models from '../models';

interface IState {
    numberOfPeople: number;
    destination: string;
    places: models.IPotentialPlace[];
    filteredPlaces: models.IPotentialPlace[];
}

class Home extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            numberOfPeople: 0,
            destination: "",
            places: [],
            filteredPlaces: []
        };
    }

    componentDidMount() {
        var mappedLocations: models.IPotentialPlace[] = []
        data.locations.map((loc, idx) => {
            mappedLocations.push(new models.PotentialPlace(loc.id, loc.name, loc.description, loc.image, loc.maxOccupancy, loc.location))
        });

        this.setState({
            places: mappedLocations,
            filteredPlaces: mappedLocations
        });
    }
    

    render() {
        const hasSelectedPeople = this.state.numberOfPeople !== 0;
        let searchSummary;

        if (hasSelectedPeople) {
            searchSummary = <p>There are {this.state.numberOfPeople} people going on your trip!</p>
        } else {
            searchSummary = <p>How many people are you taking with you?</p>
        }

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
                        <a className={"button is-primary " + (this.state.numberOfPeople === 1 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 1)}>1 person</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 2 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 2)}>2 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 3 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 3)}>3 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 4 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 4)}>4 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 5 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 5)}>5 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 6 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 6)}>6 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 7 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 7)}>7 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 8 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 8)}>8 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 9 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 9)}>9 people</a>
                        <a className={"button is-primary " + (this.state.numberOfPeople === 10 ? "" : "is-outlined")} onClick={e => this.updateNumberPeople(e, 10)}>10 people</a>
                    </div>

                    <div className="field">
                        <label className="label">Where do you want to go?</label>
                        <div className="control">
                            <input className="input" type="text" value={this.state.destination} onChange={this.handleDestinationChange} placeholder="Destination" />
                        </div>
                    </div>

                    {searchSummary}
                    {this.state.destination ? 
                        <p>You are going to {this.state.destination}</p>
                        :
                        this.state.numberOfPeople > 0 ? 
                            <p>Choose somewhere you'd like to go :)</p> :
                            null
                    }
                </div>
            </div>

            <div className="hero">
                <div className="container">
                    <div className="columns is-multiline">
                        {this.state.filteredPlaces.map((place, idx) => 
                            <PackLocation key={place.id} location={place} />
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    updateNumberPeople = (event: React.MouseEvent<HTMLAnchorElement>, numberPeople: number) => {
        event.preventDefault();
        this.setState({
            numberOfPeople: numberPeople
        }, () => {
            this.filterPlaces();
        });
    }

    handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            destination: event.target.value
        }, () => {
            this.filterPlaces();
        });
    }

    filterPlaces = () => {
        var places = this.state.places.filter(place => {
            return (this.state.numberOfPeople === 0 || this.state.numberOfPeople <= place.maxOccupancy) &&
                    (this.state.destination === "" || place.location.toLowerCase().indexOf(this.state.destination.toLowerCase()) > -1);
        });

        this.setState({
            filteredPlaces: places
        });
    }
}

export default Home;
