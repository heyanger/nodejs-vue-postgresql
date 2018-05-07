const winston = require('winston')

winston.level = 'debug'
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      colorize: true,
      prettyPrint: true
    })
  ]
})

module.exports = logger
