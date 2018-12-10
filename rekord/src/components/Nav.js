import React from 'react';
import logo from './assets/logo2.svg'
import './styles/styles.css';
// import { BrowserRouter as Router } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import Signin from './Signin';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
        <div className="nav-items-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="nav-items">
        {/* <NavLink to="/signin">LOG IN  &nbsp; &nbsp;| </NavLink>
        <NavLink to="/signup"> &nbsp; &nbsp;REGISTER</NavLink> */}
        {/* <Route path="/signin" component={Signin} /> */}
        <Link to={"/signin"}> LOG IN &nbsp;| &nbsp;</Link>
        <Link to={"/signup"}> REGISTER &nbsp;| &nbsp; </Link>
        <Link to={"/notesview"}> NOTES </Link>


        </div>
            
      </div>
  );

}

export default Nav; 
