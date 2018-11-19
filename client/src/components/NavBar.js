import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavLink,UncontrolledDropdown,DropdownToggle,
//     DropdownMenu,
//     DropdownItem } from 'reactstrap';

class NavBar extends Component {
//     constructor(props) {
//         super(props);
    
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//           isOpen: false
//         };
//       }
//       toggle() {
//         this.setState({
//           isOpen: !this.state.isOpen
//         });
//       }
//       render() {
//         return (
//           <div>
//             <Navbar color="light" light expand="md">
//               <NavbarBrand href="/">Game List</NavbarBrand>
//               <NavbarToggler onClick={this.toggle} />
//               <Collapse isOpen={this.state.isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                   <NavItem>
//                     <NavLink href="/">Home</NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink href="/login">LogIn</NavLink>
//                   </NavItem>
//                   <UncontrolledDropdown nav inNavbar>
//                     <DropdownToggle nav caret>
//                       Users
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem>
                       
//                       </DropdownItem>
//                       <DropdownItem>
//                         Option 2
//                       </DropdownItem>
//                       <DropdownItem divider />
//                       <DropdownItem>
//                         Reset
//                       </DropdownItem>
//                     </DropdownMenu>
//                   </UncontrolledDropdown>
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </div>
//         );
//       }
//     }
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