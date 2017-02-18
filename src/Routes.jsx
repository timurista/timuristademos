
import * as pages from './pages'
import React, { Component } from 'react'
import { Route } from 'react-router'

export default function Routes() {
    // TODO: fixme
    console.log('ROUTES>', Object.keys(pages), pages)
    return Object.keys(pages).map( key => <Route path={`/${key.toLowerCase()}`} component={pages[key]} />)
}