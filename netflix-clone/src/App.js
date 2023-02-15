import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Home from "./component/Home";
import Film from "./component/Film";
import TVShow from "./component/TVShow";
import MovieDetails from "./component/MovieDetails";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Film />} />
            <Route path="/tvshow" element={<TVShow />} />
            <Route path="/movie-details/:movieID" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
