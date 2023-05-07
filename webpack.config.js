const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@C': path.resolve(__dirname, 'src/components'),
      '@P': path.resolve(__dirname, 'src/pages'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_ORIGIN': JSON.stringify(process.env.REACT_APP_ORIGIN),
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3000,
    open: true,
  },
};