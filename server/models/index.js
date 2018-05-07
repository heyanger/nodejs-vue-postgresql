const fs = require('fs')
const path = require('path')
const sequelize = require('../core/sequelize')

const db = {}

const basename = path.basename(module.filename)

// Filter non "." starting files and index.js locally
fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db)
  .forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db)
    }
  })

db.sequelize = sequelize

module.exports = db
