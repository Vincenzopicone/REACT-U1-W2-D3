import {/*  Link, */ useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
            <section className="p-5">
            <section>
               <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={movie.Poster}/>
                 <Card.Body>
                 <Card.Title>{movie.Title}</Card.Title>
                 <Card.Text>{movie.Plot}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Actors: {movie.Actors}</ListGroup.Item>
                <ListGroup.Item>Year: {movie.Year}</ListGroup.Item>
                <ListGroup.Item>Realeased: {movie.Released}</ListGroup.Item>
                <ListGroup.Item>Writer: {movie.Writer}</ListGroup.Item>
               </ListGroup>
               <Card.Body>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
               </Card.Body>
                </Card>
            </section>
            <section>
        {/*         <CommentArea imdbID={movie.imdbID}/> */}
            </section>
            </section>
        )}
        </>
    )
}




export default MovieDetails;