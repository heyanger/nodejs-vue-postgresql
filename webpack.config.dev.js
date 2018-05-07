const config = {}

const webpack = require('webpack')

config.mode = "development"

config.devServer = {
  hot: true
}

config.entry = ['eventsource-polyfill', 'babel-polyfill', 'webpack-hot-middleware/client?name=frontPage', './client/index.js']

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
]

config.module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]
    }
  ]
}

module.exports = config
