import React from 'react';
import logo from './assets/logo2.svg'
import './styles/styles.css';
import { NavLink, Route } from 'react-router-dom';
import Signin from './Signin';


const Nav = () => {
  return (
        <div className="nav-items-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="nav-items">
        <NavLink to="/signin">LOG IN  &nbsp; &nbsp;| </NavLink>
        <NavLink to="/signup"> &nbsp; &nbsp;REGISTER</NavLink>
        <Route path="/signin" component={Signin} />
            </div>
            
      </div>
  );

}

export default Nav; 
