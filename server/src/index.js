import express from 'express'

import createStore from "./helpers/createStore";
import renderer from './helpers/renderer'

const app = express()

// Use public directory as a static directory, publicly available
// Which is used in html script tag below
app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore()

    // Initialize and load data into store

    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
