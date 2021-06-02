module.exports = {
    mode: 'development',
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
    },
    devtool: 'source-map' // this will show relavent file which has logs (without this console will show main.js as source file)
}