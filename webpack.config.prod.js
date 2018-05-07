const config = {}

const CssNano = require('cssnano')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

config.mode = "production"

config.entry = ['babel-polyfill', './client/index.js']

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: false
    })
  ]
}
config.plugins = [
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  })
]

config.module = {
  rules: [
    {
      test: /\.(css|sass|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')
            ],
            sourceMap: false
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    }
  ]
}


module.exports = config
