const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log('canvas.js', 'Time: ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.sendFile( path.resolve(`${__dirname}/../views/canvas.html`) );
})

router.post('/signature', (req, res) => {
    res.json('hello signature')
})

module.exports = router