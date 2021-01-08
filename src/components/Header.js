import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
//import catlogo from '../assets/FelineFarmers.png'


class Header extends Component {
    render(){
        return(
            <>
                <h1>Header</h1>
                <Jumbotron fluid class="jumbotron">
                    {/* <a href="/"><img src={ catlogo } alt="cat logo" id="cat-logo" /></a> */}
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