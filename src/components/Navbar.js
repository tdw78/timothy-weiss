import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <div>
         <br></br>
        <div className="nav">
        <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/skills"> Technical Skills</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/">Home</Link>    
        </div>

      </div>
    )
  }
}


export default NavBar;