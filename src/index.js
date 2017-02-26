import 'aframe'
// import 'aframe-bmfont-text-component'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import Routes from './Routes'
import 'react-widgets/lib/less/react-widgets.less'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer } from 'redux-form'

const store = createStore(
  combineReducers({ form: reducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
