const express = require('express');
const router = express.Router();
const Session = require('../controllers/sessions');
const flash = require('connect-flash');



router.get('/', (req, res) => {
    // req.flash('message', 'hello');
    Session.isLogin(req, res);

    // res.redirect('/login');

    // req.flash('welcome', 'Welcome!✍️🥳');
    // res.render('index',{ title: "Welcome home!", views: req.session.viewCount, welcome: req.flash('welcome') } );
});

router.post('/', (req, res) => {

    
    Session.createUserSession(req);


    Session.getView(req);
    // if(req.session.viewCount){
    //     req.session.viewCount++;
    // }else{
    //     req.session.viewCount = 1;
    // }
    req.flash('welcome', 'Welcome!✍️🥳');
    res.render('index',{ title: "Welcome home!", views: req.session.viewCount, welcome: req.flash('welcome'),username:req.session.username } );
})

module.exports = router;