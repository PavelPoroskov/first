//const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");

//plugin, get vars from file .env and system vars
const DefinePlugin = new Dotenv({
  path:'./.env',
  systemvars: true //load system vars, thay trump vars from .env
});

const myConfig = {
  entry: {
    appes5plus: './src/index-react-app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  externals: { // Use external version of React
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
//              ["env", { "targets": { "uglify": true } }],
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
      template: './src/index.html',
      inject:'head',
      filename: 'index.es5plus.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
//      defaultAttribute: 'defer',
      custom: {
        test: /\.bundle\.js$/,
        attribute: 'type',
        value: 'module'
      },      
    }),
    DefinePlugin
  ]  
};


//console.log(DefinePlugin.definitions['process.env.NODE_ENV']);
const valueProd = JSON.stringify('production');
if (DefinePlugin.definitions['process.env.NODE_ENV'] == valueProd) {
  console.log('NODE_ENV == production');
  // myConfig['plugins'].push(new webpack.optimize.UglifyJsPlugin({
  //   uglifyOptions: {
  //     ecma: 6
  //   }
  // }));
  myConfig['plugins'].push(new BabelMinifyPlugin());
}else{
  console.log('NODE_ENV != production');
  myConfig['devServer'] =  {   // no production
    contentBase:'./build'      // no production
  };                           // no production
  myConfig['devtool'] = 'inline-source-map';  // no production
};

module.exports = myConfig;
