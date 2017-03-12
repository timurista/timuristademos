import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
// import { IndexLink, Link } from 'react-router'
import AppHeader from './AppHeader'
// import Breadcrumbs from 'react-breadcrumbs'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'


class App extends Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) }
    }    

    render() {
        return (
          
          
      <div className="App">
        <AppHeader />
        <div className="App-header">
          MAIN PAGE
          {this.props.children}          
        </div>
      </div>
    )
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
}


export default App
