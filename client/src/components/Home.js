import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



// const Styles = styled.div`
//     background: blue;
//     display: flex;
//     justify-content: space-between;
//     height: 50px;
//     color: white;

//     a {
//         text-decoration: none;
//         color:white;
//     }`

class HomePage extends Component {



    render() {
        return (
            <div>
                <h1>Welcome </h1>
                <h2>Keep track of your game and the ones you want to play.</h2>

                <Button><Link to ='/login'>Login</Link></Button>
            </div>
        );
    }
}

export default HomePage;