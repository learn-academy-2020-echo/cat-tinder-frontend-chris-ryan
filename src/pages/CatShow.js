import React, { Component } from 'react'

class Show extends Component {
    render(){
        console.log("show", this.props.cat)
        return(
            <>
                <h1>Specific Cat Here! Maow!</h1>
                <p>{ this.props.cat.name }</p>
                <p>{ this.props.cat.age }</p>
                <p>{ this.props.cat.enjoys }</p>
            </>
        )
    }
}


export default Show