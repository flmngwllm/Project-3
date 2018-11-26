import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import '../Home.css'
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const ListStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border-radius: 25px;
  background: black;
  margin: 10px 0;
  button {
    width: 20px;
    right: 5px;
    top: 10px;
    background-color: black;
    border-radius: 5px;
    position: absolute;
    border: none;
  }
  input,
  textarea {
    background-color: black;
    border: none;
    border-radius: 25px;
    
  }
  input {
    height: 30%;
    font-size: 1.3rem;
    left: 40px;
  }
  textarea {
    height: 70%;
    border-radius:25px;
  }

  `

  const listStylesC = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
  `

const createBut = styled.div`
 background-color: black;
`

class List extends Component {


  state = {
    user: {},
    lists: []
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        lists: res.data.lists
      })
    })
  }

  handleCreateNewList = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'Name',
      description: 'Description'
    }
    axios.post(`/api/users/${userId}/lists`, payload).then(res => {
      const newList = res.data
      const newStateLists = [...this.state.lists, newList]
      this.setState({ lists: newStateLists })
    })
  }

  handleDelete = listId => {
    axios.delete(`/api/lists/${listId}`).then(() => {
      
      const newLists = [...this.state.lists]
      const filtered = newLists.filter(list => {
        return list._id !== listId 
      })
      this.setState({lists: filtered})
    })
  }

  handleChange = (event, listId) => {
  
    const { value, name } = event.target
    const newLists = [...this.state.lists]
    const updatedVals = newLists.map(list => {
      if (list._id === listId){
        list[name] = value
      }
      return list
    }) 

    this.setState({lists: updatedVals})
  }

  handleUpdate = (listId) => {
    const listToUpdate = this.state.lists.find(list => {
      return list._id === listId
    })
    axios.patch(`/api/lists/${listId}`, listToUpdate).then(() => {
      console.log("Updated List")  
    })
  }

  render() {
    return (
      <div className ="background4">
        <h1>Welcome to your List Page {this.state.user.username}</h1>
       
        <button className ='button' onClick={this.handleCreateNewList}>
          Create List
          </button>
         
          
        <listStylesC>
          {this.state.lists.map(list => {
            const deleteList = () => {
              return this.handleDelete(list._id)
            }
            return (
              <ListStyles>
                <input 
                   onBlur={() => this.handleUpdate(list._id)}
                  onChange={(event) => this.handleChange(event, list._id)} 
                  type="text" name="title" 
                  value= {list.title} 
                />


                <textarea 
                  onBlur={() => this.handleUpdate(list._id)}
                  onChange={(event) => this.handleChange(event, list._id)} 
                  name="description" 
                  value={list.description} 
                />
                <button onClick={deleteList}> </button>
                </ListStyles>
            )
          })}
          </listStylesC>
      </div>
    )
  }
}
    
    export default List
