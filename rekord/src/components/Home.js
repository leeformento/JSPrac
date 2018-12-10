import React, { Component } from 'react';
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import Plans from './Plans'
import Footer from './Footer'


class Home extends Component {
  render() {
    return (
      <div className="Home">
         <Nav />
         <Hero />
         <About />
         <Plans />
         <AboutThree />
         <AboutTwo />
         <Footer/>

      </div>
    );
  }
}

export default Home;
