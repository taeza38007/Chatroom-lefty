const express = require('express');
const router = express.Router();
const Session = require('../controllers/sessions');
const flash = require('connect-flash');


router.get('/', (req, res) => {
    // res.render('chatroom', { layout:'layouts/chatlayout', title: "LET's CHAT"});
    Session.logOut(req, res);
    res.redirect(307,'/login');
});


module.exports = router;