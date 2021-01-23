module.exports = {
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
