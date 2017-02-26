import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import { About, VRShopper } from '../pages'
import App from '../App'
import Routes from '../Routes'

export function routeTester(wrapper, routeName, expectedComponent) {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props()
        pathMap[routeProps.path] = routeProps.component
        return pathMap
    }, {}) 
    expect(pathMap[routeName]).toBe(expectedComponent)
}

it('renders the correct about page route', () => {
    const wrapper = shallow(<Routes />)
    console.log(wrapper)
    routeTester(wrapper, '/about', About)
})

it('renders the correct vrshopper page route', () => {
    const wrapper = shallow(<Routes />)
    console.log(wrapper)
    routeTester(wrapper, '/vrshopper', VRShopper)
})

it('renders the correct home page route', () => {
    const wrapper = shallow(<Routes />)
    console.log(wrapper)
    routeTester(wrapper, '/', App)
})
