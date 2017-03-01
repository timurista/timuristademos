
import React, { Component } from 'react'
import { Route, Router, browserHistory } from 'react-router'
import App from './App' // Home component
import { About, VRShopper, TimeComponents, ChromeDevTools } from './pages'


export default class Routes extends Component {

    render() {
        return (<div>
        <Router history={browserHistory}>
          <Route path="/" component={App} name="Home" />       
            <Route path="/about" component={About} name="About"/>
            <Route path="/time" component={TimeComponents} name="Time"/>
            <Route path="/vrshopper" component={VRShopper} name="VR Shopper" />
            <Route path="/chromedevtools" component={ChromeDevTools} name="Chrome Dev Tools" />          
          </Router>
          
      </div>
      )
    }
}
