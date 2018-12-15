import React from 'react';
import logo from './assets/logo2.png'
import './styles/styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
        <div className="nav-items-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="nav-items">
        <Link to={"/signin"}> LOG IN &nbsp;| &nbsp;</Link>
        <Link to={"/signup"}> REGISTER &nbsp; </Link>


        </div>
            
      </div>
  );

}

export default Nav; 
