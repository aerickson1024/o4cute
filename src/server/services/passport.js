const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
// Tell Strategy where to look for the jwt token
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) {
      // err indicates something went wrong
      // false indicates no user was found so nothing to send
      return done(err, false);
    }
    
    if (user) {
      // no errors and user was found
      done(null, user);
    } else {
      // no errors but user was not found
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);