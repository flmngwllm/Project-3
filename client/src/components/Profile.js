import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Profile extends Component {
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
               this.setState({ user: res.data })
             })
          }
    render() {
        return (
            <div className = 'background4'>
                {this.state.user.username}
               {/* <Link to ={`/users/${userId}/lists`}> List</Link> */}
            </div>
        );
    }
}

export default Profile;