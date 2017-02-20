import React, { Component } from 'react'
import {Entity, Scene} from 'aframe-react'
// import Breadcrumbs from 'react-breadcrumbs'
// import logo from './logo.svg'
// import './App.css'
// import { Router, Route, Link, browserHistory } from 'react-router'

export default class VRShopper extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>VR Shopper Demo</h2>
        </div>
        
        <Scene>
          <Entity 
            geometry={{primitive: 'plane', height: 1, width: 1}}
            material="color: blue"
            position={[0, 0, -5]} />
            
        <Entity 
          geometry={{primitive: 'box'}} 
          material="color: red" 
          position={[0, 0, -10]}
          onClick={() => { console.log('Clicked Box!') }}
        />
        <Entity 
          geometry="primitive: sphere"
          material="color: yellow"
          position={[2, 2, -2]}
          onClick={() => { console.log('you clicked me'); this.object3D.rotation.x += .001} }
        />
        {/* <Entity bmfont-text={{text: 'HELLO WORLD'}} position="{[0, 1, -5]}"/> */}
      </Scene>
      </div>
    )
    }
}

