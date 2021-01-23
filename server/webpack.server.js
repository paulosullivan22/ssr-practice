const path = require('path')

module.exports = {
    // Inform webpack we're building nodeJS bundle than client
    target: 'node',

    // Root file of app
    entry: './src/index.js',

    // Output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        // handles async code
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions' ]}}]
                    ]
                }
            }
        ]
    }
}
