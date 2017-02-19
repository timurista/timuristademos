import React, { Component } from 'react'
import { DateTimePicker } from 'react-widgets'
// import Globalize from 'globalize'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
// import { autobind } from 'core-decorators';
// import logo from './logo.svg'
import '../TimePicker.css'

import Moment from 'moment'

// Globalize.locale('en')
// globalizeLocalizer(Globalize)
momentLocalizer(Moment)

export default class TimeComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            militaryTime: false
        }
    }
    toggle(e) {
        e.preventDefault()
        this.setState({ militaryTime: e.target.value === 'true'})
    }
    renderTime() {
        const { militaryTime } =this.state
        const format = (militaryTime) ? 'H:mm' : 'h:mm A'
        // const timeToggle = (militaryTime) ? '12 Hour Format': '24hr Military Time Format'
        return (
          <div>
            <label>24hr Military Time
              <input onChange={this.toggle.bind(this)} 
                type='radio' value={true} name='m'/>
            </label>
            <label>12hr Am/PM Time 
              <input onChange={this.toggle.bind(this)} 
                type='radio' value={false} name='t'/>
            </label>
            {/* <button type="button" onClick={this.handleClick.bind(this)}>{timeToggle}</button> */}
        <DateTimePicker 
          calendar={false} 
          format={format}
          defaultValue={new Date()}
         />
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
        {this.renderTime.call(this)}
      </div>
    )
    }
}