import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// and the Home component
import Main from './pages/Main'
// import About from './pages/About'

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        {/* add it here, as a child of `/` */}
        <IndexRoute component={Main} />

        {/* <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route> */}
      </Route>      
      <Route path="/about" component={Main}/>
    </Router>
  ),
  document.getElementById('root')
)
