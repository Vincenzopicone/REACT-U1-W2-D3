import { Link, useLocation } from "react-router-dom";
import Section from "../component/Section";

const Navbar = () => {
  const location = useLocation();
    
    return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#221f1f" }}>
        <a className="navbar-brand" href={'alt'}>
          <img src={'./assets/logo.png'} alt={'logo'} style={{width: '100px', height: '55px'}} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item font-weight-bold ${location.pathname === "/home" ? "active" : ""}`}>
              <Link className="nav-link font-weight-bold" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className={`nav-item font-weight-bold ${location.pathname === "/tvshow" ? "active" : ""}`}>
              <Link className="nav-link font-weight-bold" to="/tvshow">TV Shows</Link>
            </li>
            <li className={`nav-item font-weight-bold ${location.pathname === "/film" ? "active" : ""}`}>
              <Link className="nav-link font-weight-bold" to="/film">Movies</Link>
            </li>
           {/*  <li className={`nav-item font-weight-bold ${location.pathname === "/movie-details" ? "active" : ""}`}>
              <Link className="nav-link font-weight-bold" to="/film">Movie Details</Link>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link font-weight-bold" href={'alt'}>Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href={'alt'}>My List</a>
            </li> */}
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </nav>
      <Section/>
      </>

      );
};

export default Navbar;