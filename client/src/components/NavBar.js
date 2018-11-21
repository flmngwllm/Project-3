import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavLink,UncontrolledDropdown,DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


    const navBar = styled.div`
  background-color: black;
  `

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <navBar>
            <Navbar className = "nav"   expand="md">
              <NavbarBrand className = "navlink" href="/">Game List</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className = "navlink" href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className = "navlink" href="/login">LogIn</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className = "navlink" href="/users">Users</NavLink> 
                    </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </navBar>
        );
      }
    
    // render() {
    //     return (
    //         <div>
    //              <h3><Link to ="/">Home</Link></h3>
    //              <h3><Link to ="/" >Games</Link></h3>
    //              <h3><Link to ="/users">User</Link></h3>
    //              <h3><Link to ="/login">Login</Link></h3>


    //         </div>
    //     );
    // }
}

export default NavBar;