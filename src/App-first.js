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
/* import './App.css'; */
/* import './carousel.css'; */ 
import './App.css'; 

import carousel00 from './img/00-carousel.jpg';
import carousel0 from './img/0-carousel.png';
import carousel1 from './img/1-carousel.jpg';
import carousel2 from './img/2-carousel.jpg';
import carousel3 from './img/3-carousel.jpg';
import carousel4 from './img/4-carousel.jpg';
import carousel5 from './img/5-carousel.jpg';
import carousel6 from './img/6-carousel.jpg';
import carousel7 from './img/7-carousel.jpg';
import carousel8 from './img/8-carousel.jpg';
import carousel9 from './img/9-carousel.jpg';
import carousel10 from './img/10-carousel.jpg';
import carousel11 from './img/11-carousel.jpg';
import carousel12 from './img/12-carousel.jpg';
import carousel13 from './img/13-carousel.jpg';

import logo from './img/ratusha-icon.png';  /* ./logo.svg */
/* import logo from './logo.svg';  /* ./logo.svg */

/*
const divStyle = {
  backgroundImage: 'url(' + ratusha + ')',
};
*/

class App extends Component {
  render() {
    return (
      <div>

        <div className="navbar-wrapper">
        <Grid>
        <Navbar inverse collapseOnSelect staticTop> 
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"> • РАТУША • </a>
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
        </Grid>
        </div>

        <Grid>
        <Jumbotron>

  <Carousel controls={false} indicators={false}>
    {/* 
    <Carousel.Item>
      <img className='center-block' width={600} alt="300x300" src={ratusha}/>
      <Carousel.Caption>
        <Image className="App-logo center-block" src={logo} responsive />
        <h3>•РАТУША•</h3>
        <p>М<small>УЗЕЙ ИСТОРИИ И АРХИТЕКТУРЫ </small><br /><small>ГОРОДА</small> С<small>ОРТАВАЛА</small></p>
      </Carousel.Caption>
    </Carousel.Item>
    */}
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel00}/>
    </Carousel.Item>    
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel1}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel2}/>
    </Carousel.Item>
    {/* 
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel3}/>
    </Carousel.Item>   
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel4}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel5}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel6}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel7}/>
    </Carousel.Item>        
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel8}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel9}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel10}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel11}/>
    </Carousel.Item>    
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel12}/>
    </Carousel.Item>
    <Carousel.Item>
      <img className='center-block' width={500} alt="•RATUSHA•" src={carousel13}/>
    </Carousel.Item>
     */}
  </Carousel>      

        </Jumbotron>
        </Grid> 


{/*  width={600} height={600}


      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>


     <div className="slideshow"> 
        <div className="slideshow-image" style={divStyle}> HELLO WORLD! </div>
    </div>     
*/}

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
