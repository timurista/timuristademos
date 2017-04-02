import React, {Component} from 'react';
import {reducer} from 'redux-form';
const {Provider} = require('react-redux');
// const configureStore = require('../utils/configureStore').default;
import {createStore} from 'redux'

// const initialState = {   app: {     name: 'ReduxExamples'   } };
const store = createStore(reducer);
export default class Wrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        );
    }
}