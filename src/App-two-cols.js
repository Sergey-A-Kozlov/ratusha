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

/*  
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

import React, { Component } from 'react'; 
import { Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Carousel, Image, Glyphicon } from 'react-bootstrap'; 
import './App.css'; 

import carousel from './img/ratusha.jpg';
import carousel00 from './img/00-carousel.jpg';
import carousel0 from './img/0-carousel.png';
import carousel1 from './img/1-carousel.jpg';
import carousel2 from './img/2-carousel.jpg';
import carousel3 from './img/3-carousel.jpg';

import logo from './img/ratusha-icon.png';  /* ./logo.svg */
/* import logo from './logo.svg';  /* ./logo.svg */

/*
const divStyle = {
  backgroundImage: 'url(' + ratusha + ')',
};
*/

class App extends Component {

// ********* нужно понять, как оформить в этом классе ************
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
      <div>
      <Grid>
        {/*
        <div className="navbar-wrapper">  
          <div className="container">
         */} 
            <Navbar inverse collapseOnSelect fixedTop>  {/* className="navbar" */}
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">• РАТУША •</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#"> История </NavItem>
                  <NavItem eventKey={2} href="#"> Настоящее </NavItem>
                  <NavItem eventKey={3} href="#"> Будущее </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
         {/*    
          </div>
        </div>
          */}

{/*        <Carousel className="carousel"> 
          <div class="carousel-inner">
            <Carousel.Item className="item">
              <Image  alt="•RATUSHA•" className="img-img" responsive src={carousel1}/>           
            </Carousel.Item>
          </div>
        </Carousel>
        <Carousel className="carousel"> 
          <div class="carousel-inner">
            <Carousel.Item className="item">
              <Image  alt="•RATUSHA•" className="img-img" responsive src={carousel1}/>           
            </Carousel.Item>
          </div>
        </Carousel>   
*/}

        <Row>

          <Col xs={12} md={7}>
            <Carousel> 
              <Carousel.Item>
                <Image  alt="•RATUSHA•" responsive src={carousel}/>           
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col xs={12} md={5}>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </Col>

        </Row>

      </Grid>       
      </div>
    );
  }
}

export default App;

