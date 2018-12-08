import React from 'react';
import logo from './assets/logo2.svg'
import './styles/styles.css';

const Nav = () => {
  return (
        <div className="nav-items-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="nav-items">
            <a href="/login"> LOG IN&nbsp;&nbsp;| </a>
            <a href="/register"> &nbsp;&nbsp;SIGN UP </a>
            </div>
            
      </div>
  );

}

export default Nav; 
