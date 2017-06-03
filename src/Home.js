
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

import carousel from './img/ratusha.jpg'
import carousel00 from './img/00-carousel.jpg'
import carousel0 from './img/0-carousel.png'
import carousel1 from './img/1-carousel.jpg'
import carousel2 from './img/2-carousel.jpg'
import carousel3 from './img/3-carousel.jpg'

import logo from './img/ratusha-icon.png'  /* ./logo.svg */

import About from './About.js'
import Topics from './Topics.js'

class Home extends React.Component {  

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (

  <div>
    <Grid>
      <Row>
          <Col xs={12} md={7}>
            <Carousel> 
              <Carousel.Item>
                <LinkContainer to="/about">
                  <Image bsClass="img-link img" responsive alt="•RATUSHA•" src={carousel}/> 
                </LinkContainer>            
              </Carousel.Item>
              <Carousel.Item>
                <LinkContainer to="/topics">
                  <Image bsClass="img-link img" responsive alt="•RATUSHA•" src={carousel3}/> 
                </LinkContainer>            
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col xs={12} md={5}>
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                  <LinkContainer to="/about"><NavItem eventKey={1} title="ABOUT"> About </NavItem></LinkContainer>
                  <LinkContainer to="/topics"><NavItem eventKey={2} title="TOPICS"> Topics </NavItem></LinkContainer>              
            </Nav>
          </Col>

      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>           

      </Row>
    </Grid> 
  </div>

    )
  } 
} 
export default Home  