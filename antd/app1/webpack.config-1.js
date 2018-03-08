const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extract1 = new ExtractTextPlugin('[name]-one.css');
const extract2 = new ExtractTextPlugin({ 
  filename: '[name]-two.css',
  allChunks: true
});

//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CleanWebpackPlugin = require('clean-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  mode: isProduction ? 'production': 'development',
  devServer:  {   // no production
    contentBase:'./build',      // no production
    historyApiFallback: true
//    ,https:
  },                           // no production
  // devtool: 'inline-source-map',  // no production
  entry: {
//    'bundle.min.css': './src/index.js',
    'bundle': './src/index.js'
  },
  output: {
    filename: '[name]',
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
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      // {
      //   test: /\.(scss|css)$/,
      //   exclude: /node_modules/,
      //   use: extract1.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader']
      //   })
      // },
      {
        test: /node_modules\/.*\.css$/,
        use: extract2.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },

    ]
  }, 

  plugins: [

    new HtmlWebpackPlugin({
      template: './public/index-dev.html',
//      inject:'head',
      filename: 'index.html'
    }),

//    extract1,
    extract2,

//    new MiniCssExtractPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),    

    new CleanWebpackPlugin(['build']),

    new CopyWebpackPlugin([
      { from: 'public/favicon.ico' },
      { from: 'public/react-dom.production.min.js' },
      { from: 'public/react.production.min.js' },
    ]),

  ]  
};