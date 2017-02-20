import React, { Component } from 'react'
import {Entity, Scene} from 'aframe-react'
// import Breadcrumbs from 'react-breadcrumbs'
// import logo from './logo.svg'
// import './App.css'
// import { Router, Route, Link, browserHistory } from 'react-router'

export default class VRShopper extends Component {
    render() {
        return (
      <div>
        
        <Scene>
          <Entity
            geometry={{primitive: 'sphere', radius: 100}}
            material={{
                shader: 'flat', 
                src: 'url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)'}}
            scale="1 1 -1"/>
          <Entity 
            geometry={{primitive: 'box', height: 1, width: 1}}
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
        <p>RenderMe</p>
        
        {/* SKY COMPONENT TODO: refactr */}
        
        {/* TODO: this for upload (https://eventphotosolutions.files.wordpress.com/2010/10/living-room-3601.jpg */}
        {/* https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg */}
        {/* <Entity bmfont-text={{text: 'HELLO WORLD'}} position="{[0, 1, -5]}"/> */}
      </Scene>
    </div>
    )
    }
}

