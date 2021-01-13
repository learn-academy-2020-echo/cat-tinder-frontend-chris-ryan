import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import headerimage from '../assets/kittyheader.png'


class Header extends Component {
    render(){
        return(
            <>
                
                <Jumbotron fluid id="jumbotron">
                    <a href="/"><img src={ headerimage } alt="cat logo" id="cat-logo" /></a>
                    <Container fluid>
                        <h2 className="display-3"></h2>
                        <p className="lead"></p>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Header