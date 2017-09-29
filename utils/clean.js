const config = require('../server/config');
const logger = require('../server/core/logger');
const moment = require('moment');
const chalk = require('chalk');

logger.info();
logger.info(chalk.bold('---------------------[ Cleaning DB at %s ]---------------------------'), moment()
  .format('YYYY-MM-DD HH:mm:ss.SSS'));

const models = require('../server/models');

// sync models
models.sequelize.sync({ force: false })
  .then(() => {
    logger.info(chalk.bold('---------------------[ Cleaned DB at %s ]---------------------------'), moment()
      .format('YYYY-MM-DD HH:mm:ss.SSS'));
    process.exit();
  });

