// Starter point for client app

import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

// Hydrating application
ReactDOM.hydrate(<Home />, document.querySelector('#root'))
