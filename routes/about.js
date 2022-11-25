const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const user = require('../controllers/users');


router.get('/', (req, res) => {
    res.render('about', { title: 'Bout Boi'});
});

let text;

router.post('/', async (req, res) => {
    // console.log(req.body.box3);
    // console.log(req.body.box4);
    let username = req.body.box3;
    let password = req.body.box4;

    const passSec = await user.hashPassword(password, text);

    console.log(`Hashed password: ${passSec}`);
    // user.addUser(res, username, passSec);




    }
);

module.exports = router;