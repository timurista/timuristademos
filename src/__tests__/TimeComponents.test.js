import React from 'react'
// import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import { TimeComponents } from '../pages'
import { DateTimePicker } from 'react-widgets'
import moment from 'moment'

describe('Time Compnents', ()=> {
    const props = {
        militaryTime: true
    }
    it('renders militaryTime when sent as props in the format H:mm', () => {
        const wrapper = shallow(<TimeComponents {...props} />)
        const datePickerProps = wrapper.find(DateTimePicker).props()
        expect(datePickerProps.format).toBe('H:mm')
    })
    it('renders default time 12:00 am', () => {
        const defTimeProps = {
            militaryTime: false,
            defaultValue: '12:00 am'
        }
        const wrapper = shallow(<TimeComponents {...defTimeProps} />)
        const datePickerProps = wrapper.find(DateTimePicker).props()
        const dateTime = datePickerProps.defaultValue
        expect(dateTime.toString()).toBe(moment('12:00 am', 'h:mm A').toString())
    })
    it('toggles time format from military to standard when clicked ', () => {
        const wrapper = shallow(<TimeComponents {...props} />)
        wrapper.find('input[name="standardTime"]').simulate('change', {
            target: [
                {
                    value: 'standard',
                }
            ],
        })
        const datePickerProps = wrapper.find(DateTimePicker).props()
        expect(datePickerProps.format).toBe('h:mm A')
    })
  
})
