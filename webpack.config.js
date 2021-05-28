module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // this will refer .babelrc for presets (preset rules to transpile)
                    loader: 'babel-loader'
                }
            }
        ]
    }
}