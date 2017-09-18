var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//var webpack = require('webpack');

//loaders
//rules

var clientConfig = {
//    entry: "./app/app.js",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/bundle.js",
        sourceMapFilename: "js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
    //        loader: 'babel-loader'
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [ 
                        ["env", { "targets": 
                            { "browsers": "last 2 versions", "uglify": true } }],
                        "react"
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        }]        
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
    ]
}



 

//if (ENV === 'production') {
//  clientConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
//}

//module.exports = clientConfig
var fs = require('fs');




var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


var serverConfig = {
//    entry: "./app/app.js",
    entry: "./src/server.js",
    target: "node",
    output: {
        path: path.resolve(__dirname, 'buildsrv'),
        filename: "server.js",
        sourceMapFilename: "server.map"
    },
    devtool: '#source-map',
    externals: nodeModules,
    // node: {
    //     __dirname: true
    // },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
//            loader: 'babel-loader'
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [ 
                        ["env", { "targets": 
                            { "node": "current", "uglify": true } }],
                        "react"
                    ]
                }
            }
        },
        // { 
        //     test:  /\.json$/, 
        //     loader: 'json-loader' 
        // },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 
                "style-loader",
                "css-loader"
            ]
        }]        
    },
    plugins: [
    ]
}


module.exports = [ serverConfig, clientConfig ];