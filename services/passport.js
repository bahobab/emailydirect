const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');

const User = mongoose.model('users'); // this is the 'users' model we created
// in User.js

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async(accessToken, refreshToken, profile, done) => {
    try {
        const newUser = await new User({googleId: profile.id}).save();
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }
}));