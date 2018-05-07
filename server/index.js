const config = require('./config')
const logger = require('./core/logger')
const dayjs = require('dayjs')
const chalk = require('chalk')

logger.info()
logger.info(chalk.bold('---------------------[ Server starting at %s ]---------------------------'), dayjs()
  .format('YYYY-MM-DD HH:mm:ss.SSS'))

const models = require('./models')
const app = require('./core/express')

const startServer = () => {
  // Start init
  app.listen(config.PORT, () => {
    logger.info(`Server running at port: ${chalk.green(config.PORT)}`)
  })
}

// sync models
if (!config.isTestMode() && config.resyncEnabled() === true) {
  models.sequelize.sync({ force: true })
    .then(startServer)
} else {
  startServer()
}

module.exports = app
