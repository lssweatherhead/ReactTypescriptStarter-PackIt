import React, { Component } from 'react';

interface IState {
  activeStep?: number
}

class Notes extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: undefined
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
                  <li><a href="" onClick={e => this.scrollTo(e, 4)}>Part 4 - Basic forms and input</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 5)}>Part 5 - Handling Events</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 6)}>Part 6 - Conditional rendering</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 7)}>Part 7 - Using lists and keys</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 8)}>Part 8 - Filtering and sorting</a></li>
                  <li><a href="" onClick={e => this.scrollTo(e, 9)}>Part 9 - Thinking in React and next steps</a></li>
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
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 4 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 4 - Basic forms and input</h3>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 5 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 5 - Handling events</h3>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 6 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 6 - Conditional rendering</h3>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 7 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 7 - Using lists and keys</h3>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 8 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 8 - Filtering and sorting</h3>
                  </div>

                  <hr />
                </React.Fragment>
              }

              {(this.state.activeStep === 9 || this.state.activeStep === undefined) &&
                <React.Fragment>
                  <div>
                    <h3 className="subtitle is-size-4">Part 9 - "Thinking in React" and next steps</h3>
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
