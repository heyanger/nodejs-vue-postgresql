const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const _ = require('lodash');
/**
 * Environment type
 */
const DEV = process.env.NODE_ENV === 'development';
const PROD = process.env.NODE_ENV === 'production';
const STAGING = process.env.NODE_ENV === 'staging';
const commonConfig = {};
if (DEV) {
  commonConfig.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
  /**
   * Dev server configs
   */
  commonConfig.devServer = {
    historyApiFallback: true,
    noInfo: true
  };
} else if (PROD || STAGING) {
  commonConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks 
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ];
}
/**
 * Loaders
 */
commonConfig.module = {
  loaders: [{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015']
    }
  }, {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        scss: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'vue-style-loader'
        })
      }
    }
  }, {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  }, {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  },
  {
    test: /(\.css|\.scss)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          localIdentName: '[local]'
        }
      },
      {
        loader: 'sass-loader',
        options: {}
      }
      ]
    })
  }
  ]
};

const frontPage = Object.assign({}, _.cloneDeep(commonConfig), {
  name: 'frontPage',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common.js',
      styles: path.resolve(__dirname, './client/assets/stylesheet'),
      components: path.resolve(__dirname, './client/components')
    }
  }
});
frontPage.plugins = _.union(frontPage.plugins, [
  new HtmlWebpackPlugin({
    filename: path.join(__dirname, 'dist/index.html'),
    template: path.join(__dirname, 'client/index.html'),
    inject: true
  }),
  new ExtractTextPlugin({
    disable: DEV,
    filename: 'styles.css'
  })
]);

if (DEV) {
  frontPage.entry = {
    main: ['webpack-hot-middleware/client?name=frontPage', './client/index.js']
  };
}
module.exports = [frontPage];
