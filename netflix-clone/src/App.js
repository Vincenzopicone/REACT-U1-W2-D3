import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./component/NavBar";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
