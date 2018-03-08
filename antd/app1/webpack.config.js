const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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

      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                localIdentName: isProduction
                  ? '[hash:base64]'
                  : '[name]__[local]___[hash:base64:5]',
              },
            },
          ]
      },

      {
        test: /node_modules\/.*\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
      },

    ]
  }, 

  plugins: [
//     new CleanWebpackPlugin(['build']),

//     new HtmlWebpackPlugin({
//       template: './public/index-dev.html',
// //      inject:'head',
//       filename: 'index.html'
//     }),

    // new ExtractTextPlugin({
    //   allChunks: true,
    //   filename: 'styles.[contenthash].css',
    // }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),    
    //new MiniCssExtractPlugin(),

// //    new CleanWebpackPlugin(['build']),
//     new CopyWebpackPlugin([
//       { from: 'public/favicon.ico' },
//       { from: 'public/react-dom.production.min.js' },
//       { from: 'public/react.production.min.js' },
//     ]),

  ]  
};