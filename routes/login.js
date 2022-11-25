const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login/log', { title: 'Log in', message: req.flash('message')});
});

router.post('/', (req, res) => {
    res.render('login/log');
})

module.exports = router;