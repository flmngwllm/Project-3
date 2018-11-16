import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <div>
                 <h3><Link to ="/">Home</Link></h3>
                 <h3><Link to ="/" >Games</Link></h3>
                 <h3><Link to ="/users">User</Link></h3>
                 <h3><Link to ="/login">Login</Link></h3>


            </div>
        );
    }
}

export default NavBar;