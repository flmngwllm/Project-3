import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
// import axios from 'axios'
import '../Login.css'
import SignUpForm from './SignUpForm';




class LogIn extends Component {


 

  render() {
    return (
      <div className = 'background2'>
        
        <SignUpForm {...this.props}/>
      </div>
      
    );
  }
}

export default LogIn;