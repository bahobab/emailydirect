const express = require('express');
const passport = require('passport');
const GoogleStarategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStarategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: 'auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    // console.log(refreshToken);
    console.log(profile);

}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
    res.send({greeting: 'Salut les copains!...'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);