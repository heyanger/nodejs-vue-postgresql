
module.exports = function(router) {
  const logger = require('../core/logger');

  router.route('/hello')
    .get((req, res) => {
      res.json('Hello World!');
    });
};
