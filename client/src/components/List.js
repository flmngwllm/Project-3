import React, { Component } from 'react';
import axios from 'axios'

class List extends Component {
    state = {
        title: '',
        description: ''
      }
    
      componentDidMount(){
        const initialState = {
          _id: this.props.list._id,
          title: this.props.list.title,
          description: this.props.list.description
        }
    
        this.setState(initialState)
      }
    
      handleChange = (event) => {
        const { value, name } = event.target
        this.setState({[name]: value})
      }
    
    
      handleDelete = () => {
        axios.delete(`/api/lists/${this.state._id}`).then(() => {
          this.props.getAllLists()
        })
      }
    
      handleUpdate = () => {
        axios.patch(`/api/lists/${this.state._id}`, this.state).then(() => {
          console.log("Updated List")  
        })  
      }
    
      render() {
         
        return (
          <div>
            <input onBlur={this.handleUpdate}
              onChange={this.handleChange}
              type="text" name="title"
              value={this.state.title}
            />
            <textarea onBlur={this.handleUpdate}
              onChange={this.handleChange}
              name="description" value={this.state.description}
            />
            <button onClick={this.handleDelete}>X</button>
            </div>
        )
      }
    }
    
    export default List
