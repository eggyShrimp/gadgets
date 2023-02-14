const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log('cache.js', 'Time: ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.sendFile( path.resolve(`${__dirname}/../assets/static.md`) );
})

module.exports = router