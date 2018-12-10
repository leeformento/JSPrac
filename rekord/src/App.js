import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }


  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />

      </div>
    );
  }
}

export default App;
