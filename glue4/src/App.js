import React, { Component } from 'react'
import './index.css'

import Input from './components/Input'
// import Submitted from './components/Submitted'
import Toasted from './components/Toasted'
import Filter from './components/Filter'

import jsonData from './data.json'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isSubmitted: false,
    }
  }

  updateState = () => {
    this.setState({isSubmitted: true})
    console.log('isSubmitted: state set to true')
  }

  falseState = () => {
    this.setState({isSubmitted: false})
    console.log('isSubmitted: state set to false')
  }

  render() {
    return (
      <>
        <Filter data={jsonData}/>
        <Input updateState={this.updateState}/>
        {/* <Submitted isSubmitted={this.state.isSubmitted} falseState={this.falseState}/> */}
        <Toasted isSubmitted={this.state.isSubmitted} falseState={this.falseState}/>
      </>
    )
  }
}

