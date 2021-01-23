const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base')

const config = {
    // Inform webpack we're building nodeJS bundle than client
    target: 'node',

    // Root file of app
    entry: './src/index.js',

    // Output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack not to include any external libraries in bundle
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
