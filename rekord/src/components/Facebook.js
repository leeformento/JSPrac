import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends Component {
    state = {
        isLoggedin: false,
        name: '',
        email:'',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response);
    }

    componentClicked = () => {
        console.log("clicked!")
    }

  render() {
    let fbContent;
    if(this.state.isLoggedIn ) {
        fbContent = null

    } else {
        fbContent = (<FacebookLogin
          appId="997522443773404"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />)
    }
    return (
      <div className="facebook-container">        
          {fbContent}
      </div>
              
    );
    }
}

export default Facebook;
