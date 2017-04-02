import React, {Component} from 'react'
// import {parse} from 'react-docgen'; import LoginForm from
// '!raw!../components/LoginForm'; import {LoginForm} from '../components';
// import { Router, Route, Link, browserHistory } from 'react-router' const
// loginFormDocs = parse(LoginForm);

export default class ComponentDocumentation extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Documentation</h2>
                </div>
                <div className="main">
                    Documentation
                </div>
                <div>
                    Add event
                </div>
            </div>
        )
    }
}
