const express = require('express');

require('./services/passport'); // just the file is required
const app = express();

require('./routes/google.auth.route')(app);

app.get('/', (req, res) => {
    res.send({greeting: 'Salut les copains!...'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);