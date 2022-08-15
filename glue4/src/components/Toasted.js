import React, { Component } from 'react'

import { ToastContainer, Toast} from 'react-bootstrap'

export default class Toasted extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose = () =>{
        this.setState({show: false})
        this.props.falseState()
    }

    render() {
    return (
        <ToastContainer position='top-end'>
            <Toast show={this.props.isSubmitted} onClose={this.handleClose}>
            <Toast.Header>Form successfully submitted!
            </Toast.Header>
            <Toast.Body>I'm toast!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
    }
}
