import React, { Component } from 'react'
import {Entity, Scene} from 'aframe-react'
// import logo from './logo.svg'
// import './App.css'
// import { Router, Route, Link, browserHistory } from 'react-router'

export default class VRShopper extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>VR Demo</h2>
        </div>
        <Scene>
        <Entity 
          geometry={{primitive: 'box'}} 
          material="color: red" 
          position={[0, 0, -5]}/>
        {/* <Entity bmfont-text={{text: 'HELLO WORLD'}} position="{[0, 1, -5]}"/> */}
      </Scene>
      </div>
    )
    }
}

