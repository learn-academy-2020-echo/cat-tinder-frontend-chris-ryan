import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
class Footer extends Component {
    render(){
        return(
            <div>
                 <h6>Footer</h6>
              <Nav>
                <NavItem>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">All Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Add Cat</NavLink>
                </NavItem>
              </Nav>
            </div>
          );
        }
}


export default Footer