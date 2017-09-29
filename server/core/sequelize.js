const logger = require('./logger');

const config = require('../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.DATABASE_URI);

sequelize
  .authenticate()
  .then(() => {
    logger.info('Successfully established connection to database');
  })
  .catch((err) => {
    logger.error('Unable to connect to database', err);
  });

module.exports = sequelize;
