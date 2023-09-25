const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { rules } = require('./webpack.rule.config')

module.exports = env => {
  const config = {
    target: 'web',
    resolve: {
      extensions: ['.js'],

      alias: {
        'eview-ui': '@cloudsop/eview-ui'
      },
    },
    entry: [path.resolve(__dirname, './themes/default/javascript/itm-entry.js')],
    output: {
      filename: 'itm-embed.js',
      path: path.resolve(__dirname, './themes/app'),
      publicPath: '/itmwebsite/themes/app/',
    },
    optimization: {
      minimize: false,
      noEmitOnErrors: true,
      moduleIds: 'hashed',
    },
    devServer: { contentBase: './themes/app' },
    node: { fs: 'empty' },
    stats: { colors: true },
    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    ],
    module: {rules},
    externals: {
      'react': 'Horizon',
      'react-dom': 'Horizon',
      'eview-ui': 'HorizonEviewUI',
      'react-redux': 'HorizonRedux',
      moment: 'moment',
    },
  };
  const nodeEnv = env && env.prod ? env.prod : 'development';
  const isProd = nodeEnv === 'production';
  if (isProd) {
    config.plugins.push(new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          reduce_vars: false,
          collapse_vars: false,
          drop_debugger: true,
        },
        output: {
          beautify: false,
          comments: false,
        },
      },
    }));
  }
  return config;
};
