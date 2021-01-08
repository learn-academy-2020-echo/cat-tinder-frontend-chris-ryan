import React, { Component } from 'react'


class CatIndex extends Component {
    render(){
        console.log(this.props.cats)
        return(
            <>
                <h1>Here are all the cats!</h1>
                { this.props.cats.map((cat, index) => {
                    return (
                        <a href={`/catshow/${cat.id}`} key={ index } ><p>{ cat.name }</p></a>
                    )
                })}
            </>
        )
    }
}


export default CatIndex