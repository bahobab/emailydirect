const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

const keys = require('./config/keys');
mongoose.connect(keys.MONGO_URI);

require('./models/User');
require('./services/passport'); // just the file is required

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/google.auth.route')(app);

app.get('/', (req, res) => {
    res.send({greeting: 'Salut les copains!...'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);