const Authentication = require('./src/server/controllers/authentication');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
  
  // catches everything else
  app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`);
  });
}