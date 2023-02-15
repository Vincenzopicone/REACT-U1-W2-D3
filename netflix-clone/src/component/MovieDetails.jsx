import {/*  Link, */ useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col} from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import CommentArea from "./CommentArea";
/* import CommentArea from "./CommentArea"; */

const MovieDetails = () => {
    const params = useParams();

    const [movie, setMovie] = useState(null);
    /* const [id, setId] = useState(null); */


    const fetchFilm = async () => {
        try {
            const response = await fetch (`http://www.omdbapi.com/?apikey=c6fbb83e&s&i=${params.movieID}`);
            
            if (response.ok) {
                const data = await response.json();
                setMovie(data)
                console.log(data)           

            } else {
                alert("Errore")
            
                        
            }
        } catch (error) {
            alert("Errore", error)           
            
        }
    }
    useEffect(() => {
        fetchFilm()
    },[]);


    return (
        <>
        {movie && (
            <Row className="justify-content-center p-5 m-0 ">
            <Col xs={12} md={4} className="text-center">
               <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={movie.Poster}/>               
               {/* <Card.Body>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
               </Card.Body > */}
                </Card>
            </Col>
            <Col  xs={12} md={4} className="m-0 p-0">
            <ListGroup className="list-group-flush">
                <ListGroup.Item><h2 className="text-dark"><strong> {movie.Title}</strong> </h2></ListGroup.Item>
                <ListGroup.Item>{movie.Plot}</ListGroup.Item>
                <ListGroup.Item> <strong> Actors: </strong> {movie.Actors}</ListGroup.Item>
                <ListGroup.Item><strong> Year: </strong> {movie.Year}</ListGroup.Item>
                <ListGroup.Item><strong>Realeased:</strong> {movie.Released}</ListGroup.Item>
                <ListGroup.Item><strong>Writer:</strong> {movie.Writer}</ListGroup.Item>
               </ListGroup>
            </Col>
            <Col xs={12} md={4}>
                <CommentArea imdbID={params.movieID}></CommentArea>
            </Col>
            </Row>
        )}
        </>
    )
}




export default MovieDetails;