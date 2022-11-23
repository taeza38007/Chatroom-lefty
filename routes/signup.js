const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signup/signup', { title: 'Sign up'});
});

router.post('/', (req, res) => {
    res.render('login/log', { title: 'Log In!!!!!'});
})

module.exports = router;