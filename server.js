const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello to node js git repasitory.');
});

app.listen(3000, () => {
    console.log('server runing on port 3000');
});