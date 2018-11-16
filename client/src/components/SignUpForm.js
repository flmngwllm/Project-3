import React, { Component } from 'react';
import axios from 'axios'

class SignUpForm extends Component {

    state = {
        username: '',
        password: ''
      }
      
      handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
      }
      handleSubmit = (event) => {
        event.preventDefault()
    
        // Make post to our api to create new user
        axios.post('/api/users', this.state).then(res => {
          // when we get that data back, we need to navigate to the new users page
          console.log(res.data)
          this.props.history.push(`/users/${res.data._id}`)
        })
        
      }
    


    render() {

        return (
            <div>
               <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
          </div>
          <button type="submit">Create User</button>
        </form>
      
                
            </div>
        );
    }
}

export default SignUpForm;