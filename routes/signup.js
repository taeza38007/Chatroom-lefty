const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const user = require('../controllers/users');
const flash = require('connect-flash');

router.get('/', (req, res) => {
    return res.render('signup/signup', { title: 'Sign up PLZ'});
});

router.post('/', async (req, res) => {
    // res.render('login/log', { title: 'Log In!!!!!'});
    if (!(req.body.username && req.body.password)){
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    let username = req.body.username;
    let password = req.body.password;
    let hashedPassword = await user.hashPassword(password); 

    // const yoyo = 
    let checkUser = await User.findOne({ username: username });
    if (!checkUser){
        user.addUser(res, username, hashedPassword);
        console.log('User has been added!');
        
        req.flash('message', 'Sign up successfully!✍️🥳');
        res.redirect('/login');

        // res.render('login/log', { title: '🧠', message:'yo'});
        // res.status(200).json({ message: "Your choosen username has been used. Plz choose a new one 👻" });
    }
    else{
        
        return res.status(200).json({ message: "Your choosen username has been used. Plz choose a new one 👻" });
    }
})

module.exports = router;