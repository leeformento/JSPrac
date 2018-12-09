import React from 'react';
import hero from './assets/hero2.svg'
import './styles/styles.css';

const Nav = () => {
    return (
          <div className="hero-container">
              <img className="hero" src={hero} alt="Hero" />
              <h1 className="slogan"> Note taking <br /> made easy. </h1>
               <div className="font-awesome">
                   <i className="fas fa-ellipsis-h fa-6x"></i>
                   </div>
                   <p>Inspiration strikes anytime and anywhere.</p>
                   <p>Rekord Space lets you capture, nurture,</p>
                   <p>and share your notes and ideas across any device.</p>

              {/* <i className="fas fa-arrow-down fa-2x"></i> */}
        </div>
    );
  
  }

export default Nav; 
