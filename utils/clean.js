const logger = require('../server/core/logger')
const dayjs = require('dayjs')
const chalk = require('chalk')

logger.info()
logger.info(chalk.bold('---------------------[ Cleaning DB at %s ]---------------------------'), dayjs()
  .format('YYYY-MM-DD HH:mm:ss.SSS'))

const models = require('../server/models')

// sync models
models.sequelize.sync({ force: false })
  .then(() => {
    logger.info(chalk.bold('---------------------[ Cleaned DB at %s ]---------------------------'), dayjs()
      .format('YYYY-MM-DD HH:mm:ss.SSS'))
    process.exit()
  })
