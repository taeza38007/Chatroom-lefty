const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Boi'});
});

router.get('/add-user', (req, res) => {
    const user = new User({
        name: 'IDONTPROVIDEPASSWOED'
    });

    user.save()
        .then(result => res.send(result))
        .catch(err => console.log(err))
    res.redirect('/');
});

module.exports = router;