import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
class Footer extends Component {
    render(){
        return(
            <div>
               
              <Nav>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/catindex/">All Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/catnew">Add Cat</NavLink>
                </NavItem>
              </Nav>
            </div>
          );
        }
}


export default Footer