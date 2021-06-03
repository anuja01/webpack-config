const path = require('path')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development' // can set process.env.NODE_ENV in build command
module.exports = {
    mode: mode,

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // different OS support
    },
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
    devtool: 'source-map', // this will show relavent file which has logs (without this console will show main.js as source file)

    devServer: {
        contentBase: './dist' // where bundled code is
    }
}