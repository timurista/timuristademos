import React from 'react'
// import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { BuggyConnectedForm } from '../components'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Field, reducer } from 'redux-form'

// store to get the form connected
const store = createStore(combineReducers({ form: reducer }))
const wrapper = mount(
			<Provider store={store}>
				<BuggyConnectedForm />
			</Provider>
    )    

const form = wrapper.find('form')

it('renders the buggy connected form', () => {   
    wrapper
})

it('has a form with at least 3 inputs', () => {
    const inputs = wrapper.find(Field)
    expect(inputs).toHaveLength(3)
})

it('registers bugg form in the store', () => {
    form
    expect(store.getState().form.buggyForm).not.toBe(null)
})

it('enters info works like expected', () => {
  // TODO: check that inputs enter values we expect
    const zip = 'TEST NAME'
    form.find(Field).first().find('input').simulate('change', {
        target: { value: zip }
    })
    const expected = JSON.stringify(store.getState().form.buggyForm.values)
    expect(expected).toBe(JSON.stringify({'zip': zip}))
})

it('on submit will submit something', () => {
    const submitButton = wrapper.find('button[type="submit"]')
    // console.log(submitButton)
    form.simulate('submit')
    const mapStateToProps = (state) => ({
        state,
    })
    // TODO: write submit here
    // console.log(JSON.stringify(store.getState()))

    expect(store.getState().form).not.toBe(null)
})