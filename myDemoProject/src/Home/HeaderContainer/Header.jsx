import React from "react";
import { Link } from 'react-router-dom'
import "./Headers.css";

function Header() {
  
  return (
    <div className="header">
      
      <Link className='links' to='/'>
      <p className="logotext">Pogoda</p>
      </Link>
      <img className='wariki' src='wari.png' alt=''/>
      <img className='wariki1' src='wari.png' alt=''/>
      <h2 className="logotext2">TODAY</h2>
    </div>
  );
}

export default Header;
