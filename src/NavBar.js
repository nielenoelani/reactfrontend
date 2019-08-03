import React from 'react';
import LogInButton from './LogInButton';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    
    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="nav-links container">
          <Link className="logo" to="/"><h2>Logo</h2></Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/feeds">Feeds</Link>
          <LogInButton>Log In</LogInButton>
    
          
        
//        
        </div>
      </div>
    )
  }

export default NavBar;