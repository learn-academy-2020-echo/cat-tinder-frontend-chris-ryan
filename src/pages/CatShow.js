import React, { Component } from 'react'
import { NavLink, Button } from 'reactstrap'

class Show extends Component {
    render(){
        console.log("cat info:", this.props.cat)
        console.log("cat id:", this.props.cat.id)

        return(
            <>
                {/* Welcome for SPECIFIC cat (dynacmic) */}
                <h1>Welcome { this.props.cat.name }! Maow!</h1>
                <p>{ this.props.cat.name }</p>
                <p>{ this.props.cat.age }</p>
                <p>{ this.props.cat.enjoys }</p>
                <NavLink
                     href={`/catedit/${this.props.cat.id}`}
                >
                    <Button color="secondary">
                    {/*Dynmaic name on Edit Button */}
                    Edit { this.props.cat.name }'s Profile
                    </Button>
                </NavLink>
            </>
        )
    }
}


export default Show