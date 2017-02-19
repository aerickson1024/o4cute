const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Setup options for Local Strategy
// Tell Strategy that the usernameField is going to be referenced
// from the 'email'
const localOptions = {
  usernameField: 'email'
};

// Create Local Strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({
    email: email
  }, function(err, user) {
    if (err) {
      return done(err, false);
    }
    
    if (!user) {
      return done(null, false);
    }
    
    // compare passwords - is `password` equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      
      if (!isMatch) {
        return done(null, false);
      }
      
      // Passport will take this returned user and apply it to the request 
      // object as req.user for use in checking the users password
      return done(null, user);
    });
  });
});

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
passport.use(localLogin);