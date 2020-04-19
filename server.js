const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('hello to node js git repasitory.');
});

app.listen(port, () => {
    console.log('server runing on port 3000');
});