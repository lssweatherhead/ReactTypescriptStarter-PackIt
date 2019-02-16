import React, { Component } from 'react';

interface IState {
  activeStep?: number
}

class Notes extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: 6
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="columns">
          <div className="column is-one-third fixed">
            <div className="section">
              <div className="container">
                <ul>
                  <li><a href="" onClick={e => this.scrollTo(e, 0)}>Part 0 - Notes about project set-up</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 1)}>Part 1 - Component overview and Props</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 2)}>Part 2 - Typescript model declaration</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 3)}>Part 3 - State and Component lifecyle</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 4)}>Part 4 - Forms & Events</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 5)}>Part 5 - Conditional rendering</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 6)}>Part 6 - Using lists and keys</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column is-one-third"></div>
          <div className="column is-two-thirds">
            <div className="section">
              <div className="container">
                <h1 className="title">Getting started with React & Typescript</h1>
                <h2 className="subtitle is-family-secondary">
                    Tutorial notes
                </h2>
                {this.state.activeStep !== undefined &&
                  <a href=""onClick={e => this.scrollTo(e, undefined)}>View all notes</a>
                }
              </div>

              <hr />
              
              {(this.state.activeStep === 0 || this.state.activeStep === undefined) &&
              <React.Fragment>
                <div id="sec0" className="">
                  <h3 className="subtitle is-size-4">Part 0 - Notes about project set-up</h3>
                  <div className="is-family-secondary content">
                    <p className="subtitle has-text-weight-bold is-uppercase">Create React App</p>
                    <ol className="is-lower-roman" type="i">
                      <li>Simple to get started bootstrapping a ReactJs app - easy to configure SCSS & Typescript</li>
                      <li>Low barrier to getting to the starting line</li>
                      <li>Easy command line build</li>
                      <li>Easy to maintain</li>
                      <li>Uses webpack under the hood - works great for simple config out of the box, but it's possible to add additional or more complex configuration by "ejecting" the default config and altering it as required.</li>
                    </ol>
                    <p>Get a local build running:</p>
                    <ul className="cli-code">
                      <li className="is-family-code has-text-weight-bold">npm install</li>
                      <li className="is-family-code has-text-weight-bold">npm run start</li>
                    </ul>
                    
                    <a href="https://github.com/facebook/create-react-app"><i className="fab fa-react"></i> Read more about Create React App</a>
                    <hr />
                    <p className="subtitle has-text-weight-bold is-uppercase">SASS</p>
                    <p>Syntactically Awesome Style Sheets!</p>
                    <p>A CSS pre-processor that allows you to write nested style rules, define reusable variables and introduces mixins for simplified/efficient rules (+ many, many other benefits above vanilla CSS)</p>
                    <a href="https://sass-lang.com/"><i className="fab fa-sass"></i> Read more about SASS</a>
                    <hr />
                    <p className="subtitle has-text-weight-bold is-uppercase">Typescript</p>
                    <p>Typescript compiles to clean, simple Javascript code which runs in any browser</p>
                    <p className="is-italic">Why should I use Typescript?</p>
                    <ul>
                      <li>Typescript allows you to utilise tools like intellisense and static checking as you write code so that you can ensure that you have the fields or data that you would expect to have</li>
                      <li>You can define interfaces and classes that are reusable between different components and allow for object inheritance and confidence in code integrity</li>
                      <li>Enables a more robust application code build - strongly typed objects and methods provide greater clarity to the desired code behaviour, and this makes it easier to analyse and pick up other developer's code.</li>
                    </ul>
                    <a href="https://www.typescriptlang.org/index.html"><i className="fab fa-js-square"></i> Learn more about Typescript</a>
                  </div>
                </div>
                
                <hr />
              </React.Fragment>
              }

              {(this.state.activeStep === 1 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div id="sec1" className="">
                    <h3 className="subtitle is-size-4">Part 1 - Component overview and Props</h3>

                    <div className="is-family-secondary content">
                      <p className="subtitle has-text-weight-bold is-uppercase">Create React App</p>
                    </div>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 2 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div id="sec2" className="">
                    <h3 className="subtitle is-size-4">Part 2 - Typescript model declaration</h3>

                    <div className="is-family-secondary content">
                      <p>Time to start adding some models to our <span className="is-family-code">PackLocation</span> component</p>
                      <p>At the moment we only have one property: <span className="is-family-code">name</span> - so let's use that as a starting point.</p>
                      <p>We're going to create a new folder: "models" and add <span className="is-family-code">potential-place.model.tsx</span> under that. We will also add an <span className="is-family-code">index.tsx</span> file that exports all (*) from the new model file. I do this because it makes the importing process a bit neater (in my opinion) and prompts you to think about what you're actually importing into your files.</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"export interface IPotentialPlace {"}</p>
                            <p>{"   name: string;"}</p>
                            <p>{"}"}</p>
                            <p>{"     "}</p>
                            <p>{"export class PotentialPlace implements IPotentialPlace { "}</p>
                            <p>{"   constructor(public name: string) { "}</p>
                            <p>{"   }"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>As you can see this is a super simple class with the one public property "name" which we have designated as a <span className="is-family-code">string</span> property type.</p>
                      <p>We will start building on this more later, but this is what a simple model declaration could look like.</p>
                      <p>Now, let's use this model as part of our component props:</p>
                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"import * as models from '../models';"}</p>
                            <p>{"     "}</p>
                            <p>{"interface IProps {"}</p>
                            <p>{"   location: models.IPotentialPlace"}</p>
                            <p>{"}"}</p>
                            <p>{"     "}</p>
                            <p>{"class PackLocation extends Component<IProps, IState> {"}</p>
                            <p>{"   render() {"}</p>
                            <p>{"       return ("}</p>
                            <p>{"           <div>{this.props.location.name}</div>"}</p>
                            <p>{"       );"}</p>
                            <p>{"   }"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>When we are adding this to the properties and including it in the render return function, we will now see intellisense indicating what fields are available!</p>
                      <img src="/images/typedmodel_intellisense.PNG" />
                      <p>Of course, we will also have to update <span className="is-family-code">home.tsx</span> to now pass a <span className="is-family-code">PotentialPlace</span> model instead of the <span className="is-family-code">string</span> that it was passing before.</p>
                      <p>That will now look like:</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"<div className=\"container\">"}</p>
                            <p>{"   <PackLocation location={new models.PotentialPlace(\"Location 1: A nice house in the Cotswolds\")} />"}</p>
                            <p>{"   <PackLocation location={new models.PotentialPlace(\"Location 2: A farmhouse in Shrewsbury\")} />"}</p>
                            <p>{"   <PackLocation location={new models.PotentialPlace(\"Location 3: A city centre apartment in Manchester\")} />"}</p>
                            <p>{"</div>"}</p>              
                          </code>
                        </pre>                
                      </div>
                    </div>

                    <a href="https://github.com/lssweatherhead/ReactTypescriptStarter-PackIt/tree/Step-2-Typescript-Object-Notation"><i className="fab fa-github"></i> Check out the code here</a>

                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 3 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 3 - State and Component Lifecycle</h3>

                    <div className="is-family-secondary content">
                      <p className="subtitle has-text-weight-bold is-uppercase">State</p>
                      <p>State is an internal ("encapsulated") set of properties that a component will use to keep track of interactions and what the component should show in the view.</p>
                      <p>So let's look at giving our <span className="is-family-code">Home</span> component an idea of how many people will be going away on our holiday.</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"interface IState {"}</p>
                            <p>{"   numberOfPeople: number;"}</p>
                            <p>{"}"}</p>
                            <p>{"     "}</p>
                            <p>{"class Home extends Component<any, IState> {"}</p>
                            <p>{"   constructor(props: any) {"}</p>
                            <p>{"       super(props);"}</p>
                            <p>{"       this.state = {"}</p>
                            <p>{"           numberOfPeople: 0"}</p>
                            <p>{"       };"}</p>
                            <p>{"   }"}</p>
                            <p>{"   ..."}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>All this is doing is telling our component that it has a property <span className="is-family-code">numberOfPeople</span> (which is a <span className="is-family-code">number</span>), and that the initial state of the component is that there are 0 people going away.</p>
                      <p>Note how we pass props to the base constructor. Class components should always call the base constructor with <span className="is-family-code">props</span>.</p>
                      <p>Now, if we allow the user to select from a list of options (1 person, 2 people, 3 people... etc) and fire off an event with the selected number (see more on this in <a href="" onClick={e => this.scrollTo(e, 4)}>Part 4 - Forms & Events</a>) then this will set the state appropriately:</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"updateNumberPeople = (event: React.MouseEvent<HTMLAnchorElement>, numberPeople: number) => {"}</p>
                            <p>{"   event.preventDefault();"}</p>
                            <p>{"   this.setState({"}</p>
                            <p>{"       numberOfPeople: numberPeople"}</p>
                            <p>{"   });"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>This function takes two arguments - the event (in this case a mouse event), and a number; the special <span className="is-family-code">setState</span> function is called to load the provided number into the component state.</p>
                    
                      <p className="has-text-weight-bold">The special <span className="is-family-code">{"setState({...})"}</span> function</p>
                      <ul>
                        <li>When this function is called, React knows that the state has changed, and so will call the <span className="is-family-code">render()</span> method again which will update the view</li>
                        <li>You cannot modify state directly i.e. you can't just say <span className="is-family-code">this.state.numberOfPeople = 10</span> as this will not re-render the component (so nothing will change in the view)</li>
                        <li><span className="is-family-code">setState()</span> may be updated asynchronously which means you cannot rely on their values when they are in flux</li>
                        <li>There may be multiple independent properties in a single component's state - using the <span className="is-family-code">setState()</span> function will only update the specified parameters and will leave the others intact</li>
                      </ul>


                      <p className="subtitle has-text-weight-bold is-uppercase">Component Lifecycle</p>

                      <p>There are a few functions that the component lifecycle offers as hooks which we can use to inject or retain information. I will touch on a few of the most frequently used (but you can see more <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">here</a>)</p>
                      
                      <p className="has-text-weight-bold"><span className="is-family-code">componentDidMount()</span></p>
                      <p>This is a function that is called once, when the component is first loaded into the view.</p>
                      <p>It is a good place to load in readonly data from APIs such as the values of dropdown lists or sorting options.</p>

                      <p className="has-text-weight-bold"><span className="is-family-code">componentDidUpdate(prevProps, prevState)</span></p>
                      <p>This is called when the state or props for the component updates (and the component is going to re-render in the view)</p>
                      <p>In our example, we could see this being called whenever we change the number of people going on our holiday:</p>
                      
                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"componentDidUpdate(prevProps: any, prevState: IState) {"}</p>
                            <p>{"   console.log(\"Used to have: \" + prevState.numberOfPeople + \" people, but now have: \" + this.state.numberOfPeople + \" people\");"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>
                      
                      <img src="/images/component_didupdate.PNG" />

                      <p className="has-text-weight-bold"><span className="is-family-code">componentWillUnmount()</span></p>
                      <p>This will be called whenever a component is about to be destroyed and removed from the view.</p>
                    
                    </div>

                    <a href="https://github.com/lssweatherhead/ReactTypescriptStarter-PackIt/tree/Step-3-State-And-Lifecyle"><i className="fab fa-github"></i> Check out the code here</a>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 4 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 4 - Forms & Events</h3>

                    <div className="is-family-secondary content">
                      <p>Okay, so now let's find out where people want to go by adding a simple text field to our app.</p>

                      <p>First, we'll update the state so that we can track our new <span className="is-family-code">destination</span> string field.</p>
                      
                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"interface IState {"}</p>
                            <p>{"   numberOfPeople: number;"}</p>
                            <p>{"   destination: string;"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>Now, let's add the text field to the render view</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"<label className=\"label\">Where do you want to go?</label>"}</p>
                            <p>{"<div className=\"control\">"}</p>
                            <p>{"   <input className=\"input\" type=\"text\" value={this.state.destination} onChange={this.handleDestinationChange} placeholder=\"Destination\" />"}</p>
                            <p>{"</div>"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>The important things to note here are that the <span className="is-family-code">value</span> field is set to <span className="is-family-code">this.state.destination</span> and that there is a function in the <span className="is-family-code">onChange</span> listener.</p>
                      <p className="has-text-weight-bold">If there is no onChange handler, then it will compile but you will see an error in the console:</p>
                      <img src="/images/input_noonchange.PNG" />
                      <p><span className="is-family-code">handleDestinationChange</span> will be called on every keystroke, so we can use this to make sure that the component state field is always up-to-date with the user input.</p>
                      <p>The function that will call the state update looks like this:</p>
                      
                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {"}</p>
                            <p>{"   this.setState({"}</p>
                            <p>{"     destination: event.target.value"}</p>
                            <p>{"  });"}</p>
                            <p>{"}"}</p>                     
                          </code>
                        </pre>                
                      </div>

                      <p>You will notice that when using Typescript, it will demand that all arguments are typed - even the ones that are raised from React. This can be a little frustrating if you're not sure what's getting passed back and forth under the hood.</p>
                      <p>One way of working this out is to interrogate the underlying type definitions. In VS Code, this is as easy as hovering over the function and reading the help text:</p>

                      <img src="/images/react_events.PNG" />
                      
                    </div>

                    <a href="https://github.com/lssweatherhead/ReactTypescriptStarter-PackIt/tree/Step-4-Basic-Forms-And-Input"><i className="fab fa-github"></i> Check out the code here</a>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 5 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 5 - Conditional rendering</h3>

                    <div className="is-family-secondary content">
                      <p className="subtitle has-text-weight-bold is-uppercase">Show/Hide</p>

                      <p>There are a few different ways to show or hide content depending upon with component state</p>

                      <ol className="far-space">
                        <li>
                          Using an element variable - we could use this for a search summary:
                          <div className="is-family-code">
                            <pre>
                              <code>
                                <p>{"render() {"}</p>
                                <p>{"   const hasSelectedPeople = this.state.numberOfPeople !== 0;"}</p>
                                <p>{"   let searchSummary;"}</p>
                                <p>{"   if (hasSelectedPeople) {"}</p>
                                <p>{"       searchSummary = <p>There are {this.state.numberOfPeople} people going on your trip!</p>"}</p>
                                <p>{"   } else {"}</p>
                                <p>{"       searchSummary = <p>How many people are you taking with you?</p>"}</p>
                                <p>{"   }"}</p>
                                <p>{"   ..."}</p>
                                <p>{"   return ("}</p>
                                <p>{"       ..."}</p>
                                <p>{"       {searchSummary}"}</p>
                                <p>{"       ..."}</p>
                                <p>{"    );"}</p>
                                <p>{"}"}</p>    
                              </code>
                            </pre>                
                          </div>
                          This takes the current component state reflecting the number of people, and displays different text depending on whether a button has been selected or not.
                        </li>
                        <li>
                          <p>Inline "if": using <span className="has-text-weight-bold is-family-code">"&&"</span></p>
                          Here we have added another property to the <span className="is-family-code">PotentialPlace</span> component which gives each place an occupancy limit:
                          <img src="/images/place_occupancy.PNG" />
                          <div className="is-family-code">
                            <pre>
                              <code>
                                <p>{"{ this.state.numberOfPeople <= 4 &&"}</p>
                                <p>{"   <PackLocation location={new models.PotentialPlace(\"Location 1: A nice house in the Cotswolds\", 4)} />"}</p>
                                <p>{"}"}</p>    
                              </code>
                            </pre>                
                          </div>   
                          The use case here is that we are only showing locations that are appropriate to the number of people selected by the user.
                        </li>
                        <li>
                          <p>Inline "if-else": using <span className="has-text-weight-bold is-family-code">"?"</span></p>
                          <div className="is-family-code">
                            <pre>
                              <code>
                                <p>{"{this.state.destination ? "}</p>
                                <p>{"   <p>You are going to {this.state.destination}</p>"}</p>
                                <p>{"   :"}</p>
                                <p>{"   this.state.numberOfPeople > 0 ? "}</p>
                                <p>{"       <p>Choose somewhere you'd like to go :)</p> :"}</p>
                                <p>{"       null"}</p>
                                <p>{"}"}</p>  
                              </code>
                            </pre>                
                          </div>
                          <p>As you can see, this can be nested multiple times (although bear in mind that it gets increasingly hard to follow the logic!)</p>
                          <p>The conditional can also return a "null" to the render method - this does not affect the firing of the component's lifecycle methods (i.e. componentDidUpdate would still be called)</p>
                        </li>
                      </ol>

                      <p className="subtitle has-text-weight-bold is-uppercase">Styling classes</p>

                      <p>If you want to add or remove dynamic classes, the practise is similar to showing/hiding the other content.</p>
                      <p>Note: you need to wrap the whole class declaration in curly braces for this to work properly</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"<a className={\"button is-primary \" + (this.state.numberOfPeople === 1 ? \"\" : \"is-outlined\")} onClick={e => this.updateNumberPeople(e, 1)}>1 person</a>"}</p> 
                          </code>
                        </pre>                
                      </div>

                      <p>This will keep the "is-outlined" class on all buttons EXCEPT the one that has a matching number to the numberOfPeople defined in the current state</p>
                    </div>

                    <a href="https://github.com/lssweatherhead/ReactTypescriptStarter-PackIt/tree/Step-5-Conditional-Rendering"><i className="fab fa-github"></i> Check out the code here</a>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 6 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 6 - Using lists and keys</h3>

                    <div className="is-family-secondary content">
                      <p className="has-text-weight-bold">Know your <span className="is-family-code">map()</span> function</p>

                      <p>So the <span className="is-family-code">map()</span> function is super important when working with arrays and lists in React. If you're a bit rusty <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN web docs are your friend.</a></p>
                      <p>Basically what we'll be doing will be using the <span className="is-family-code">map()</span> function to transform a list of objects or values into a list of elements that React can render</p>
                      <p>First, let's add a couple of object arrays to our app state: <span className="is-family-code">places</span> and <span className="is-family-code">filteredPlaces</span>. These will both be of array type <span className="is-family-code">IPotentialPlace</span></p>
                      <p>In a real-world app you would probably be getting this data from an API, but we are going to load it in from a JSON file and maintain the unfiltered list (places) so that we can manipulate the view without losing any data.</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"interface IState {"}</p>
                            <p>{"   numberOfPeople: number;"}</p>
                            <p>{"   destination: string;"}</p>
                            <p>{"   places: models.IPotentialPlace[];"}</p>
                            <p>{"   filteredPlaces: models.IPotentialPlace[];"}</p>
                            <p>{"}"}</p>  
                          </code>
                        </pre>
                      </div>

                      <p>Now let's load in the JSON data <span className="is-family-code">onComponentMount()</span> and map it to our component state arrays.</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"componentDidMount() {"}</p>
                            <p>{"   var mappedLocations: models.IPotentialPlace[] = []"}</p>
                            <p>{"   data.locations.map((loc, idx) => {"}</p>
                            <p>{"       mappedLocations.push(new models.PotentialPlace(loc.id, loc.name, loc.description, loc.image, loc.maxOccupancy, loc.location))"}</p>
                            <p>{"   });"}</p>
                            <p>{"   "}</p>
                            <p>{"   this.setState({"}</p>
                            <p>{"       places: mappedLocations,"}</p>
                            <p>{"       filteredPlaces: mappedLocations"}</p>
                            <p>{"   });"}</p>
                            <p>{"}"}</p>  
                          </code>
                        </pre>
                      </div>

                      <p>Here, for each object in the data we are loading it into the strongly typed <span className="is-family-code">PotentialPlace</span> model and then simply assigning the same array to both our arrays for their initial states.</p>
                      <p>Now we have the array, we can load it into the <span className="is-family-code">render()</span> function, again using the <span className="is-family-code">map()</span> function.</p>

                      <div className="is-family-code">
                        <pre>
                          <code>
                            <p>{"<div className=\"columns is-multiline\">"}</p>
                            <p>{"   {this.state.filteredPlaces.map((place, idx) => "}</p>
                            <p>{"       <PackLocation key={place.id} location={place} />"}</p>
                            <p>{"   )}"}</p>
                            <p>{"</div>"}</p>
                          </code>
                        </pre>
                      </div>

                      <p className="subtitle has-text-weight-bold">The importance of keys</p>

                      <p>If you do not give an element that is being rendered a unique key then you will get an console error that looks like this:</p>
                      <img src="/images/nokey.PNG"></img>

                      <p>The key property basically serves as React's way of uniquely identifying each element in an array and determining which ones have changed, are added or removed.</p>
                      <p>The key should be unique and, ideally, should be a property that we know is unique - in our case the place location id. The index of the map <span className="is-italic">could</span> be used, but this is not best practise. <a href="https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318">Read more about why we shouldn't use indexes as keys.</a></p>
                      <p>Note that keys only need to be unique among siblings - not within a wider scope of the component.</p>
                    </div>

                    <a href="https://github.com/lssweatherhead/ReactTypescriptStarter-PackIt/tree/Step-6-Lists-And-Keys"><i className="fab fa-github"></i> Check out the code here</a>
                    
                  </div>

                  <hr />
                </React.Fragment>
              }

            </div>

          </div>
        </div>
        
      </React.Fragment>
    );
  }

  scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, idx?: number)  => {
    event.preventDefault();
    this.setState({
      activeStep: idx
    })
  }
}

export default Notes;
