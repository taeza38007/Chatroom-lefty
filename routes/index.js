const express = require('express');
const router = express.Router();
const Session = require('../controllers/sessions');
const session = require('express-session');
const flash = require('connect-flash');



router.get('/', (req, res) => {
    Session.isLogin(req, res);

    // if (req.session){
    //     req.session.destroy();
    //     console.log('Session is destroyed....');
    //     console.log(req.session);
    // }else{
    //     console.log('no session found');
    // }

    // // res.redirect('login');
    // req.flash('welcome', 'Welcome back!👋🥳');
    // res.render('index',{ title: "Welcome home!", views: req.session.viewCount, welcome: req.flash('welcome') } );
})

router.post('/', (req, res) => {

    // req.session.lefty = 'lefy value';
    if(req.session.viewCount){
        req.session.viewCount++;
    }else{
        req.session.viewCount = 1;
    }
    console.log(req.session.viewCount);
    // console.log(req.session);
    res.render('index', { title: 'Home!!!!!', views: req.session.viewCount });
})



module.exports = router;