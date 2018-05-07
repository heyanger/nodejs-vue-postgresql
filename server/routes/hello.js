
module.exports = function (router) {
  router.route('/hello')
    .get((req, res) => {
      res.json('Hello World!')
    })
}
