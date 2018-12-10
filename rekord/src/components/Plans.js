import React from 'react';
import './styles/styles.css';


const AboutTwo = () => {
  return (
        <div className="plans-container">
            <div className="plans-content">
            {/* <img className="plans" src={plans} alt="iPhone" /> */}
            <div className="box-one">
                <span>
                    <h1> REKORD BASIC </h1>
                    <h2> FREE </h2>
                    <h3>Make great notes</h3>
                    <button className="btn draw-border">Register</button>
                </span>
            </div>
            <div className="box-two">
            <span>
            <span>
                    <h1> REKORD PLUS </h1>
                    <h2> $5.99 / mo </h2>
                    <h3> Organize everything</h3>
                    <button className="btn draw-border">Register</button>
                </span>
                </span>
            </div>

            
            </div>

     
      </div>
  );

}

export default AboutTwo; 
