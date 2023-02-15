import Container from "./Container";
import { Component } from "react";
import Galleria from "./Galleria";
import Section from "./Section";


class Main extends Component {
    render() {
        return (
        <div class="container-fluid px-4">
          <Section/>
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

export default Main;