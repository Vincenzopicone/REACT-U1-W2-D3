import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ModalNetflix extends Component {
    state = {
        setShow: false,
        show: false
    }

    render () {
        console.log(this.props.title)

  return (
    
    <>
      <Button variant="dark" onClick={()=>this.setState({show:!this.state.show})}>
        More Info
      </Button>
      
      <Modal show={this.state.show} onHide={this.state.show===true}>
        <Modal.Header closeButton>
          <Modal.Title>More Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>Title: {this.props.title}</Modal.Body>
        <Modal.Body>Year: {this.props.year}</Modal.Body>
        <Modal.Body>imdbID: {this.props.imdbID}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({show:!this.state.show})}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}

export default ModalNetflix;

