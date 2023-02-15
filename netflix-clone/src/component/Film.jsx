import Container from "./Container";
import { Component } from "react";
import Galleria from "./Galleria";


class Film extends Component {
    render() {
        return (
        <div class="container-fluid px-4">
           <Container nameCategory="Harry Potter"/>    
           <Galleria film={"Harry Potter"}/>
           <Container  nameCategory="Lord of the Rings"/>  
           <Galleria film={"Lord of The Rings"}/>
           <Container  nameCategory="Star Wars"/>  
           <Galleria film={"Star Wars"}/>
        </div>
        )
    }
}

export default Film;