const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/link', (req, res) => {
    res.sendFile(`${__dirname}/views/link.html`)
})

const canvas = require('./router/canvas.js');

app.use('/canvas', canvas);

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})