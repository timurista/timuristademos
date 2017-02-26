import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { IndexLink, Link } from 'react-router'
// import Breadcrumbs from 'react-breadcrumbs'

class App extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Demos application</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/time">Time Modules</Link>
          </li>
          <li>
            <Link to="/vrshopper">VR Shopper</Link>
          </li>
          <li>
            <Link to="/chromedevtools">Chrome Dev Tools Examples</Link>
          </li>
        </ul>
      </div>
    )
    }
}


export default App
