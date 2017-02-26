import React from 'react'
// import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { ChromeDevTools } from '../pages'

it('renders the chrome dev tools page', () => {
    const wrapper = shallow(<ChromeDevTools />)        
})

