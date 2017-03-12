import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import { Router, Route, Link, browserHistory } from 'react-router'

class About extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>About Pages</h2>
        </div>
        <p className="App-intro">
          My name is Tim Urista and I am a web developer living in Tucson, AZ.
        </p>
        <p>
          This website contains a sample of some of my work using react, redux, and other development tools.
          Checkout my github for more info:
        </p>
        <a href="https://github.com/timurista/">
          github account
        </a>
      </div>
    )
    }
}

export default About
