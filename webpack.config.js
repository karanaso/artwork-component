const path = require('path');
const webpack = require('webpack');
const buildDirectory = './build/';
module.exports = {
  entry: [
    'babel-polyfill',
    './source/Index.jsx',
    'webpack-hot-middleware/client?http://localhost:3000'
  ],
  output: {
    path: path.resolve(buildDirectory),
    filename: 'main.bundle.js',
    publicPath: 'http://localhost:3000/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
        test    : /\.(png|jpg|svg)$/,
        include : path.join(__dirname, 'img'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
    },
    {
      test: /\.png$/,
      loader: 'file-loader'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
        {
          loader: 'sass-loader',
        },
      ]
    }],
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ]
};