import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import '../Home.css'
import { UncontrolledCarousel } from 'reactstrap';

const Caro = styled.div`
  
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 
  `



const items = [
  {
    src: 'https://jornaldeboasnoticias.com.br/wp-content/uploads/cross-play-cross-platform-multiplataforma-xbox-ps-nintendo-PC-1280x704.jpg',
    altText: 'Lists',
    caption: 'From any system',
    header: 'Create Unique Lists'
  }

  
];

 



class HomePage extends Component {



    render() {
        return (

            
            
            <div className = 'background'>

            <Caro>
            <UncontrolledCarousel className ='caro' items={items} />
            </Caro>
                
                <h2 className ='text'>Keep track of your game and the ones you want to play.</h2>
                

                <buttonD>
                <button className = "buttonH"><Link className ='a'to ='/login'>Login</Link></button>
                </buttonD>


            </div>
        );
    }
}

export default HomePage;