const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')

const config = {
    // Root file of app
    entry: './src/client/client.js',

    // Output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)
