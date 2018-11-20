import React, { Component } from 'react';
// import axios from 'axios'
// import {Form, Input, Button} from 'reactstrap'
// import {Link} from 'react-router-dom'


class Games extends Component {

    // state = {
    //     searchName:'',
    //     results:[],
    //     games: [],
    // }


    // getAllUsers = () => {
    //     axios.get('/api/games').then((res) => {
    //       this.setState({games: res.data,
    //      })
    //     })
    // }

   

    // handleInputChange = () => {
    //     this.setState({
    //       searchName: this.search.value
    //     }, () => {
    //       if (this.state.searchName && this.state.searchName.length > 1) {
    //         if (this.state.searchName.length % 2 === 0) {
    //           this.getGames()
    //         }
    //       } 
    //     })
    //   }
      
      
    // render() {
    //     return (
    //         <div>

    //         { this.state.games.map((game) => (
    //           <div key={game._id}>
    //             {game.name}
    //             {game.image}
    //             {game.description}
    //           </div>
    //         )) }
            
    //     <Form>
    //     <Input
    //       placeholder="Search for..."
    //       ref={input => this.search = input}
    //       onChange={this.handleInputChange}
    //     />
    //     <p>{this.state.searchName}</p>
    //     <Button onClick={this.getGames}>get games</Button>
    //   </Form>
    //         </div>
    //     );
    // }
}

export default Games;