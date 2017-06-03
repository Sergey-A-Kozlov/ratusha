/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

/*   ***
Как построить: 
****************
npm run build
****************
Как увидеть результат:
****************
serve -s build
****************
http://localhost:5000 
*/

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  LinkContainer,
  IndexLinkContainer
} from 'react-router-bootstrap'

import { Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Carousel, Image, Glyphicon } from 'react-bootstrap' 
import './App.css' 

import logo from './img/ratusha-icon.png'  /* ./logo.svg */
// 
import Home from './Home.js'
import About from './About.js'
import Topics from './Topics.js'


const App = () => (
  <Router> 
    <div>
      <Grid>
            <Navbar inverse collapseOnSelect fixedTop>  
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">• РАТУША •</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <IndexLinkContainer to="/"><NavItem eventKey={1}> Номе </NavItem></IndexLinkContainer>
                  <LinkContainer to="/about"><NavItem eventKey={2}> About </NavItem></LinkContainer>
                  <LinkContainer to="/topics"><NavItem eventKey={3}> Topics </NavItem></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/> 

      </Grid>
    </div>
  </Router>
)
export default App


/*

const Home = () => (
  <div>


    <h2>Home</h2>
  </div>
)


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample 
*/