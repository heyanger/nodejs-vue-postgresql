const _ = require('lodash')

const config = require('./config.json')

const webpackConfig = require('../../webpack.config')

const curConfig = {
  isDevMode () {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  },
  isStagingMode () {
    return process.env.NODE_ENV === 'staging'
  },
  isProdMode () {
    return process.env.NODE_ENV === 'production'
  },
  isTestMode () {
    return process.env.NODE_ENV === 'test'
  },
  resyncEnabled () {
    return false
  },
  webpackConfig
}

let resConfig = {}

if (process.env.NODE_ENV) {
  resConfig = config[process.env.NODE_ENV]
} else {
  resConfig = config.development
}

const configs = _.merge(resConfig, curConfig)

// Additional Configs
configs.imageDir = `${configs.PUBLIC_DIR}/images`

module.exports = configs
