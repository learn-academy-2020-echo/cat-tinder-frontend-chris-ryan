import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Header extends Component {
    render(){
        return(
            <>
                <h1>Header</h1>
                <Jumbotron fluid>
                    <Container fluid>
                        <h2 className="display-3">FelineFarmers.com</h2>
                        <p className="lead">City Kitties just don't get it</p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Header