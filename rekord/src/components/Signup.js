import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/logo2.svg'

class Signup extends Component {
    state = {
        username: '',
        password:'',
    }

  render() {
    return (
    <div className="form-container">
          <form onSubmit={this.handleSubmit}>
          <img className="logo-login" src={logo} alt="Logo" />
          <h1> Remember everything important.</h1>
          <div className="user-container">
                  <label htmlFor="username"></label>
              <input 
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInputChange} 
              type="text"
              />
              </div>
              <div className="password-container">
                  <label htmlFor="password"></label>
                  <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="password"
                  />
              </div>
              <div>
                  <button className="form__button" type="submit">Sign Up</button>
              </div>

          </form>
      </div>
    );
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
}
  handleSubmit = event => {
      event.preventDefault();
      const endpoint = 'https://backend-project-lee.herokuapp.com/register'
      axios
      .post(endpoint, this.state)
      .then(res => {
          localStorage.setItem('jwt', res.data.token)
          this.props.history.push('/signin');
      })
      .catch(err => {
          console.error('ERROR!', err)
      })
  }
}

export default Signup;
