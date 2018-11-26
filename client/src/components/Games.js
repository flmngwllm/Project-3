import React, { Component } from 'react';
import axios from 'axios'
import {Form, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'


class Games extends Component {

    state = {
        user:{},
        lists:[],
        searchName:'',
        results:[],
        games: [],
    }


    getAllUsers = () => {
      const userId = this.props.match.params.userId
      const listId = this.props.match.params.listId
        axios.get(`/api/users/${userId}/lists/${listId}`).then((res) => {
          this.setState({
            user: res.data,
            lists: res.data.lists,
            games: res.data.games
          })
        })
      }

   

    handleInputChange = () => {
        this.setState({
          searchName: this.search.value
        }, () => {
          if (this.state.searchName && this.state.searchName.length > 1) {
            if (this.state.searchName.length % 2 === 0) {
              this.getGames()
            }
          } 
        })
      }
      
      
    render() {
        return (
            <div>

            { this.state.games.map((game) => (
              <div key={game._id}>
                {game.name}
                {game.image}
                {game.summary}
              </div>
            )) }
            
        <Form>
        <Input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.searchName}</p>
        <Button onClick={this.results}>get games</Button>
      </Form>
            </div>
        );
    }
}

export default Games;