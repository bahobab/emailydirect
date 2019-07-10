const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({greeting: 'Salut les copains!...'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);