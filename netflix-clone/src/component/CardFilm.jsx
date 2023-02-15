import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import ModalNetflix from './ModalNetlix';



class CardEpiNetflix extends Component {
  state = {
    showOn: false
  }
  render () {
    return (
    <Card className='CardFilm mx-2 my-3 rounded' style={{ width: '9rem' }}>
      <Card.Img variant="top" style={{ height: '12rem' }} src={this.props.img} onClick={()=> this.setState({showOn:!this.state.showOn})} />
      {this.state.showOn && (<ModalNetflix title={this.props.title} year={this.props.year} imdbID={this.props.imdbID} />)}
    </Card>
    )
  }
}

export default CardEpiNetflix;



/// Codice per semplice CARD
/* 
<Card.Body className='CardBody'>
        <Card.Text>{this.props.title}</Card.Text>
        <Card.Text>{this.props.year}</Card.Text>
      </Card.Body> */