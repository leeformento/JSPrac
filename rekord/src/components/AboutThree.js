import React from 'react';
import './styles/styles.css';
import notemates from './assets/transparent_notemates.svg'


const AboutThree = () => {
  return (
        <div className="about-three-container">
        <div className="about-three-content">
            <span>
                <h2> No pen? </h2>
                <h2> No paper? </h2>
                <h2> No worries.</h2>
                <br />
                <br />
                <br />

                <h3> Never have to carry a notebook nor a pen again. </h3>
                <h3> Store all your notes in one place. </h3>

            </span>
            <img className="notemates" src={notemates} alt="Austen Allred" />
           
      </div>
      </div>
  );

}

export default AboutThree; 
