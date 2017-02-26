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
            militaryTime: props.militaryTime || false
        }
    }
    toggle(e) {
        this.setState({ militaryTime: e.target.value === 'military'})
    }
    renderTime() {
        const { militaryTime } = this.state
        const { defaultValue } = this.props
        const format = (militaryTime) ? 'H:mm' : 'h:mm A'
        const defTime = Moment(defaultValue, format) || new Date()
        // const timeToggle = (militaryTime) ? '12 Hour Format': '24hr Military Time Format'
        return (
          <div>
            <label>24hr Military Time</label>
              <input onChange={this.toggle.bind(this)} 
                type='radio' 
                value='military'
                checked={(militaryTime) ? 'checked': ''}  
                name='militaryTime'/>
            
            <label>12hr Am/PM Time </label>
              <input onChange={this.toggle.bind(this)} 
                type='radio' 
                value='standard'
                checked={(militaryTime) ? '': 'checked'} 
                name='standardTime'/>
            
        <DateTimePicker 
          calendar={false} 
          format={format}
          defaultValue={defTime}
         />
      </div>
      )
    }
    render() {
        return (
      <div className="App">
        <div className="App-header">
          <h2>Time Component</h2>
        </div>
        <p className="App-intro">
          
        </p>
        {this.renderTime.call(this)}
      </div>
    )
    }
}