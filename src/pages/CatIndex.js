import React, { Component } from 'react'
// import { Card, CardTitle, Col } from 'reactstrap'


class CatIndex extends Component {
    render(){
        console.log(this.props.cats)
        return(
            <>
                <h1>Here are all the cats!</h1>
                { this.props.cats.map((cat, index) => {
                    return (
                        //<p key={index}>{ cat.name}</p>
                        <a href={'/catshow/${cat.id}'}><p key={ index }>{ cat.name }</p></a>
                        
                    )
                })}
            </>
        )
    }
}


export default CatIndex