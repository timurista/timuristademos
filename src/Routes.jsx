
import React, { Component } from 'react'
import { Route, Router, browserHistory } from 'react-router'
import App from './App'
// and the Home component
import { About, VRShopper, TimeComponents } from './pages'

export default class Routes extends Component {
    render() {
        return (
        <Router history={browserHistory}>
          <Route path="/" component={App} name="Home" />       
            <Route path="/about" component={About} name="About"/>
            <Route path="/time" component={TimeComponents} name="Time"/>
            <Route path="/vrshopper" component={VRShopper} name="VR Shopper">
            {/* TODO: <Route path="/vrshopper/demo" component={VRShopperDemo} name="VR Shopper Demo" /> */}
          </Route>

            {/* add it here, as a child of `/` */}
            {/* <IndexRoute component={Main} /> */}

            {/* <Route path="/repos" component={Repos}>
              <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route> */}   
          
        </Router>
      )
    }
}