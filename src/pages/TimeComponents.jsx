import React, { Component } from 'react'
import { DateTimePicker } from 'react-widgets'
// import Globalize from 'globalize'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
// import logo from './logo.svg'
// import './App.css'

import Moment from 'moment'

// Globalize.locale('en')
// globalizeLocalizer(Globalize)
momentLocalizer(Moment)

export default class TimeComponents extends Component {
    renderTime() {
        return (
          <div>
        <DateTimePicker calendar={false} format="h:mm A" />
      </div>
      )
    }
    render() {
        return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Time Component</h2>
        </div>
        <p className="App-intro">
          
        </p>
        {this.renderTime()}
      </div>
    )
    }
}