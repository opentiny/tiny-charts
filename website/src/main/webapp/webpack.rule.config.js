const path = require('path');

module.exports = {
  rules: [{
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader',
    },
    exclude: /(node_modules)/,
  },
  {
    include:
        [/node_modules/,
          path.resolve(__dirname, 'themes/default')],
    test: /\.(less|css)?$/,
    use: [{
      // css-loader负责读取css文件，然后使用style-loader将css内容注入到js里面去，最终是以style标签的形式嵌入到Html代码中
      loader: 'style-loader',
      // loader: MiniCssExtractPlugin.loader,
    }, {
      loader: 'css-loader',
      options: {
        esModule: false,
        url: false,
      },
    }, { loader: 'less-loader' }],
  },
  {
    include:
        [/node_modules/,
          path.resolve(__dirname, 'themes/default')],
    test: /\.svg$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 8192,
        outputPath: 'assets/',
        name: path.posix.join('static', '[name]_[hash:7].[ext]'),
        publicPath: '/itmwebsite/themes/app/assets/',
      },
    }],
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [{
      loader: 'url-loader',
      options: {
        outputPath: 'images/',
        limit: 100000,
        name: path.posix.join('static', '[name]_[hash:7].[ext]'),
        publicPath: '/itmwebsite/themes/app/images/',
      },
    }],
  },
  ],
};
