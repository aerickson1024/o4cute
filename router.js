const Authentication = require('./src/server/controllers/authentication');
const passportService = require('./src/server/services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
  session: false
});
const requireSignin = passport.authenticate('local', {
  session: false
});

module.exports = function(app) {
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  
  // catches everything else
  app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`);
  });
}