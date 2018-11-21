import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import '../Home.css'



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
            <div className = 'background'>
                <h2 className ='text'>Keep track of your game and the ones you want to play.</h2>

                <button className = "button"><Link className ='a'to ='/login'>Login</Link></button>
            </div>
        );
    }
}

export default HomePage;