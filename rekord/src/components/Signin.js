import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/logo2.svg';
import Facebook  from './Facebook';

class Signin extends Component {
    state = {
        username: '',
        password:''
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
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  type="password"
                  />
              </div>
              <div>
                  <button className="form__button"  type="submit">Sign In</button>
                  <Facebook />
              </div>

          </form>
      </div>
    );
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
  }
  handleSubmit = event => {
      event.preventDefault();
      const endpoint = 'https://backend-project-lee.herokuapp.com/login'
      console.log(this.state);
      axios
      .post(endpoint, this.state)
      .then(res => {
          console.log(res.data);
          localStorage.setItem('jwt', res.data.token)
          this.props.history.push('/notes');
      })
      .catch(err => {
          console.error('ERROR!', err)
      })
  }
}

export default Signin;
