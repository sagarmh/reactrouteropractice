import './App.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About';
import NavLink from './component/NavLink';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link" activeClassName="active">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link" activeClassName="active">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
