import express from 'express'
import 'babel-polyfill'
import { matchRoutes } from "react-router-config";

import Routes from "./client/Routes";
import createStore from "./helpers/createStore";
import renderer from './helpers/renderer'

const app = express()

// Use public directory as a static directory, publicly available
// Which is used in html script tag below
app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore()

    // Take incoming request and figure out what components should be rendered
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
