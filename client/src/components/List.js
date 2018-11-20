import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'



// const Styles = styled.div`
//     background: blue;
//     display: flex;
//     justify-content: space-between;
//     height: 50px;
//     color: white;

    // a {
    //     text-decoration: none;
    //     color:white;
    // }`

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
      title: 'List Title',
      description: 'List Description'
    }
    axios.post(`/api/users/${userId}/lists`, payload).then(res => {
      const newList = res.data
      const newStateLists = [...this.state.lists, newList]
      this.setState({ lists: newStateLists })
    })
  }

  handleDelete = listId => {
    // some unique value
    axios.delete(`/api/lists/${listId}`).then(() => {
      //Remove the idea with ideaID from this.state.ideas
      const newLists = [...this.state.lists]
      // Return only ideas that are NOT the id provided
      const filtered = newLists.filter(list => {
        return list._id !== listId // ! = =
      })
      // Take filtered data and set it to ideas
      this.setState({lists: filtered})
    })
  }

  handleChange = (event, listId) => {
    // const name = event.target.name
    // const value = event.target.value
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
    // Find the individual updated idea from this.state.ideas
    const listToUpdate = this.state.lists.find(list => {
      return list._id === listId
    })
    // axios post the endpoint with updated data
    axios.patch(`/api/lists/${listId}`, listToUpdate).then(() => {
      console.log("Updated Idea")  
    })
    // console .log saved
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <button onClick={this.handleCreateNewList}>
          Create List
          </button>
        
        
          {this.state.lists.map(list => {
            const deleteIdea = () => {
              return this.handleDelete(list._id)
            }
            return (
              <div>
                <input 
                  onBlur={() => this.handleUpdate(list._id)}
                  onChange={(event) => this.handleChange(event, list._id)} 
                  type="text" name="title" 
                  value={list.title} 
                />


                <textarea 
                  onBlur={() => this.handleUpdate(list._id)}
                  onChange={(event) => this.handleChange(event, list._id)} 
                  name="description" 
                  value={list.description} 
                />
                <button onClick={deleteIdea}>delete</button>
                </div>
            )
          })}
      </div>
    )
  }
}
    
    export default List
