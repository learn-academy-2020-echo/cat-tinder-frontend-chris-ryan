import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class Edit extends Component {
    constructor(props){
        super(props)
            this.state = {
                form:{
                name: "",
                age: "",
                enjoys: ""
                },
            success: false    
            }
    }
      
      handleChange = (e) => {
        console.log(e.target.value);
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      }

      handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        // a function call being passed from App.js
        this.props.updateCat(this.state.form, this.props.cat.id)
        // update success to true
        this.setState({ success: true })
    }

      

    render(){
        return(
            <>
                {/* Edit SPECIFIC cat name (dynamic) */}
                <h1>Edit {this.props.cat.name}...</h1>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.form.name }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input
                        type="number"
                        name="age"
                        onChange={ this.handleChange }
                        value={ this.state.form.age }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Enjoys</Label>
                        <Input
                        type="text"
                        name="enjoys"
                        onChange={ this.handleChange }
                        value={ this.state.form.enjoys }
                        />
                    </FormGroup>

                    <Button
                        name="submit"
                        color="secondary"
                        onClick={ this.handleSubmit }
                    >
                        Edit Cat Profile
                    </Button>

                </Form>
            { this.state.success && <Redirect to={ `/catshow/${this.props.cat.id}` }/> }
            </>
        )
    }
}


export default Edit