import React, { Component } from 'react'
import { BuggyConnectedForm } from '../components'

export default class ChromeDevTools extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Chrome Dev Tools</h2>
        </div>
        <p className="App-intro">
          Buggy App Example
          Open chrome dev tools          
        </p>
        <p> Buggy Form Example</p>
        <BuggyConnectedForm />
      </div>
    )
    }
  }
