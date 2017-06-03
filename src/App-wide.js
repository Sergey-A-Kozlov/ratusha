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
import { Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Carousel, Image, Glyphicon } from 'react-bootstrap'; 
import './App.css'; 

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
/* 
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
*/
  render() {
    return (
      <div>
    <Grid>
        <div className="navbar-wrapper">
          <div className="container">
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
          </div>
        </div>
    </Grid>

        <Carousel className="carousel"> {/*activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}*/}
          <div class="carousel-inner">
            <Carousel.Item className="item">
              <Image  alt="•RATUSHA•" className="img-img" responsive src={carousel1}/> {/* width={900} height={500} */}            
            </Carousel.Item>
          </div>
        </Carousel>
        <Carousel className="carousel"> {/*activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}*/}
          <div class="carousel-inner">
            <Carousel.Item className="item">
              <Image  alt="•RATUSHA•" className="img-img" responsive src={carousel1}/> {/* width={900} height={500} */}            
            </Carousel.Item>
          </div>
        </Carousel>   
             
      </div>

    );
  }
}


export default App;

// import carouselPic1 from './assets/expo-riot.jpg'; // Tell Webpack this JS file uses this image
// import ReactPlayer from 'react-player';
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';
// import videoABBA from './ABBA.mp4'; 

{/* 
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://cleverpumpkin.ru/i/ill-0-x2.png"
            onCanPlayThrough={() => {
                // Do stuff 
            }}>
            <source src={videoABBA} type="video/mp4" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> 
        </Video>
*/} 
