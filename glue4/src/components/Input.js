import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// import Submitted from './Submitted';

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateState()
    this.setState({firstName: '', lastName: '', email: '', password: ''})
  }

  // handleChange = (e) => {
  //   // const newState = {firstName: e.target.fName, lastName: e.target.lName, email: e.target.email, password: e.target.pword}
  //   // this.setState({formData: [newState]})
  //   console.log(this.state.formData)
  //   console.log(e.target.value)
  // }

  render() {
    const {firstName, lastName, email, password} = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control type='text' placeholder='John' value={firstName} onChange={e => this.setState({firstName: e.target.value})}></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control type='text' placeholder='Jacob-Jingleheimer-Schmidt' value={lastName} onChange={e => this.setState({lastName: e.target.value})}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control type='email' placeholder='email@email.com' value={email} onChange={e => this.setState({email: e.target.value})}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control type='password' placeholder='password' value={password} onChange={e => this.setState({password: e.target.value})}></Form.Control>
          </Form.Group>
          
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </>
    )
  }
}
