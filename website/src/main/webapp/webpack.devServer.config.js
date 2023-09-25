const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');
const { rules } = require('./webpack.rule.config')
const CompiledDoneHookPlugin = require('./CompiledDoneHookPlugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  resolve: {
    // 用于查找模块的目录
    extensions: ['.js', '.json', '.jsx', '.css', '.html', '.tsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      'eview-ui': '@cloudsop/eview-ui'
    },
  },
  entry: ['./themes/default/javascript/itm-entry.js'],
  output: {
    filename: 'itm-embed.js',
    path: path.resolve(__dirname, './themes/app'),
    publicPath: 'http://localhost:4000/',
  },
  optimization: {
    minimize: false,
    noEmitOnErrors: true,
    moduleIds: 'hashed',
  },
  stats: {colors: true},
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new HtmlWebpackPlugin({template: "./test/ft/index.tmpl.html"}),
    new CompiledDoneHookPlugin({ command: process.argv.includes('--ft') ? 'npm run ft' : '', exitProcess: true }),
  ],
  module: {rules},
  devServer: {
    contentBase: path.join(__dirname, './themes/app'),
    compress: true,
    overlay: true,
    port: 4000,
    open: process.env.OS ? 'Chrome' : false,
    openPage: 'index.html#path=/itm/itmView&curPage=/home',
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    before(app) {
      apiMocker(app, path.resolve('./contracts/itmservice/mock-api.js'), {changeHost: true});
    },
  }
};
