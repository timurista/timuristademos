import 'aframe'
// import 'aframe-bmfont-text-component'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
// import Routes from './Routes'
import { Router, Route, browserHistory } from 'react-router'
import 'react-widgets/lib/less/react-widgets.less'
// and the Home component
// import { About, Main, TimeComponents } from './pages'
import About from './pages/About'
import TimeComponents from './pages/TimeComponents'
import VRShopper from './pages/VRShopper'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App} name="Home" />       
        <Route path="/about" component={About} name="About"/>
        <Route path="/time" component={TimeComponents} name="Time"/>
        <Route path="/vrshopper" component={VRShopper} name="VR Shopper"/>

        {/* add it here, as a child of `/` */}
        {/* <IndexRoute component={Main} /> */}

        {/* <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route> */}   
      
    </Router>
  ),
  document.getElementById('root')
)
