//const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
//  	env: './src/index-env.js'
    appes5: './src/index-react-app.js'
  },
  // devtool:'inline-source-map', // no production
  // devServer:{                  // no production
  //   contentBase:'./build',       // no production
  // },                           // no production
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
//    publicPath: '/'
  },
  externals: {
            // Use external version of React
    "react": "React",
    "react-dom": "ReactDOM"
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
//              ["env", { "targets": { "browsers": "last 2 versions", "uglify": true } }],
              ["env", { "targets": { "uglify": true } }],
              'react'
              ]
          }
        }
      }
    ]
  }, 
  plugins: [
//    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './src/index.es5plus.html',
//      inject:'head',
      filename: 'index.html'
      }),
    new ScriptExtHtmlWebpackPlugin({
      custom: {
        test: /\.bundle\.js$/,
        attribute: 'nomodule'
      },      
    }),
    new Dotenv(),
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify("production")
    // }),
//    new webpack.optimize.UglifyJsPlugin()
      // ({
      // uglifyOptions: {
      //   ecma: 6
      // } })
//    new UglifyJSPlugin()
  ]  
};