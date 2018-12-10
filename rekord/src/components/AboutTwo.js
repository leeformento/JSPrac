import React from 'react';
import './styles/styles.css';
import austen from './assets/austen.png'
import luis from './assets/luis.png'


const AboutTwo = () => {
  return (
        <div className="about-two-container">
            <div className="allstars">
            <img className="luis" src={luis} alt="Luis Hernandez" />
            <span>
                <p> "Because I craft perfect code, </p>
                <p> I also craft perfect notes. I love Rekord Space!</p>
                <h2> - Luis Hernandez </h2>
                <h3> Back-end Ninja, Part time Spiderman. </h3>
            </span>
            <img className="austen" src={austen} alt="Austen Allred" />
            <span>
                <p> "Lambda School Lambda School Lambda School.</p>
                <p> Rekord Space is the best"</p>
                <h2> - Austen Allred </h2>
                <h3> CEO/Janitor at Lambda School </h3>
            </span>
            </div>

     
      </div>
  );

}

export default AboutTwo; 
