const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login/log', { title: 'Log in'});
});

router.post('/', (req, res) => {
    res.render('index', { title: 'Home!!!!!'});
})

module.exports = router;