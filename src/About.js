import React from 'react'
import { Button, ButtonToolbar, Modal, Image } from 'react-bootstrap' 
import './App.css'
import carousel from './img/ratusha.jpg'
import LightboxExample from './LightboxExample.js'

class About extends React.Component {  

//  getInitialState() {
//    return {show: false};
//  }

  state = {
    show: false
  }

//  showModal() {
//   this.setState({show: true});
//  }

  showModal = () => {
    this.setState({show: true});
  }

  hideModal = () => {
    this.setState({show: false});
  }

  render() {
    return (
    	<div>
    	  <h2>A B O U T</h2>

    	  <LightboxExample/>
{/* 
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.showModal}>
          Launch demo modal
        </Button>

        <Modal {...this.props} show={this.state.show} onHide={this.hideModal} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image bsClass="img-link img" responsive alt="•RATUSHA•" src={carousel}/> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
*/}
      </div>
    )
  }  
}	
export default About 

