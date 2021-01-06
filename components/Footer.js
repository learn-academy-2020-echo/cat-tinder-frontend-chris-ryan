import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Footer extends Component {
    render(){
        return(
            <>
                <h1>Footer</h1>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent</p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}


export default Footer