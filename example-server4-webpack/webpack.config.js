var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//var webpack = require('webpack');

//loaders
//rules

var baseConfig = {
//    entry: "./app/app.js",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/bundle.js",
        sourceMapFilename: "js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ,{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        }
        ]        
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
    ]
}

//if (ENV === 'production') {
//  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
//}

module.exports = baseConfig