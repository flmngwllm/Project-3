import React, { Component } from 'react';
import axios from 'axios'
import List from './List';

class ListPage extends Component {
    state = {
        user: {},
        lists: []
      }
    
      componentDidMount() {
        this.getAllLists()
      }
    
      getAllLists = () => {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
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
    
      render() {
        return (
          <div>
            <h1>{this.state.user.username}'s List Page</h1>
             onClick={this.handleCreateNewList}
              New Idea
            
            
              {this.state.lists.map(list => (
                <List getAllLists={this.getAllLists} key={list._id} list={list}/>
              ))}
            
          </div>
        )
      }
    }

export default ListPage;