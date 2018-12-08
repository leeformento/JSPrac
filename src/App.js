import React, { Component } from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import AboutTwo from './components/AboutTwo'
import AboutThree from './components/AboutThree'
import Plans from './components/Plans'
import Footer from './components/Footer'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
