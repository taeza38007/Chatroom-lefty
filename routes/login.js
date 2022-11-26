const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const user = require('../controllers/users');
const { fileLoader } = require('ejs');
const Session = require('../controllers/sessions');



router.get('/', (req, res) => {
    res.render('login/log', { title: 'Log in', message: req.flash('message'), username: ''});
});

router.post('/', async (req, res) => {
    if (!(req.body.username && req.body.password)){
        return res.status(400).send({ error: "Data not formatted properly" });
    }

    let username = req.body.username;
    let password = req.body.password;
    let hashedPassword = await user.hashPassword(password); 

    let checkUser = await User.findOne({ username: username });
    console.log(typeof checkUser);
    console.log(password);
    if (checkUser){
        // console.log('match!');
        const validPassword = await bcrypt.compare(password ,checkUser.password);
        if (validPassword){
            // Session.getView(req);
            Session.userSession(req, username);

            console.log('YOU ARE ALLOWED TO LOG IN!!!');
            console.log(`id from Login page: ${req.session.id}`);
            // res.render('index', { title: '🥵',views: req.session.viewCount});
            res.redirect(307, '/home');

// TODO : SEND SESSION USERNAME TO HOME PAGE && NEED TO DETROY SESSION WHEN SIGN OUT 
        }else{
            
            console.log('Wrong password........');
            req.flash('message', 'Wrong password.Plz try again 🥶');
            res.status(400).redirect('/login');
        }
    }else{
        // console.log('NOT FOUND ☹️');
        req.flash('message', `Can't find username...`);
        res.status(401).redirect('/login');
        
    }




    // res.render('login/log',{message: req.flash('message')});
})

module.exports = router;