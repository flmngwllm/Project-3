import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components'




const FormStyles = styled.div`
  
  width: 500px;
  `






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
        // const payload = {
        //     username: "",
        //     password:''
        // }
        // Make post to our api to create new user
        axios.post('/api/users',this.state).then(res => {
          // when we get that data back, we need to navigate to the new users page
         

          console.log(res.data)
          this.props.history.push(`/users`)
        })
        
      }
    


    render() {

        return (
          <FormStyles>
               <Form  onSubmit={this.handleSubmit}>
               <FormGroup>

               <div>
            <Label htmlFor="username">User Name: </Label>
            <Input onChange={this.handleChange} value={this.state.username} type="text" name="username"/>
          </div>
          </FormGroup>


          <FormGroup>
          <div>
            <Label htmlFor="password">Password: </Label>
            <Input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
          </div>
          <button className = "buttonL" type="submit">Create User</button>
          </FormGroup>
        </Form>
      
                
        </FormStyles>
        );
    }
}

export default SignUpForm;