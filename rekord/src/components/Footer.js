import React from 'react';
import './styles/styles.css';



const Footer = () => {
  return (
        <div className="footer-container">
            <div className="footer-content">
                <span>
                <h1> Rekord Space </h1>
                </span>
                <div className="icons">
                <a href="https://www.space.rekord/signin" title="Log in" className="login">LOG IN |</a> 
                <a href="https://www.space.rekord/signup" title="Register" className="register"> REGISTER |</a>
                <a href="https://www.facebook.com/leelenformento" title="Facebook Page" ><i class="fab fa-facebook-square fa-2x"></i></a>
                <a href="https://www.instagram.com/leeformento" title="Instagram Page" ><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.github.com/leeformento" title="Github Page"><i class="fab fa-github fa-2x"></i></a>

                <a href="mailto:leebatef@gmail.com" title="Mail Page"><i class="far fa-envelope fa-2x"></i></a>
    
                </div>
            </div>
      </div>
  );

}

export default Footer; 
