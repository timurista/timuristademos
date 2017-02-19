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

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        {/* add it here, as a child of `/` */}
        {/* <IndexRoute component={Main} /> */}

        {/* <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route> */}
      </Route>      
      <Route path="/about" component={About}/>
      <Route path="/time" component={TimeComponents}/>
    </Router>
  ),
  document.getElementById('root')
)
