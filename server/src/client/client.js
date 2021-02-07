// Starter point for client app
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import { renderRoutes } from "react-router-config";

import reducers from './reducers'
import Routes from './Routes'

// Creates separate axios instances for client and server with different baseURLs
const axiosInstance = axios.create({
    baseURL: '/api'
})

const store = createStore(reducers, window.INIITAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

// Hydrating application
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'))
