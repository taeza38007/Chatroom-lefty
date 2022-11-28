const express = require('express');
const router = express.Router();
const Session = require('../controllers/sessions');
const flash = require('connect-flash');
const Chathistory = require('../models/chathistory');


router.get('/', (req, res) => {
    if(!req.session.userID){
        res.redirect('/login')
    }else{

        // let chathis = await Chathistory.find({});
        // if (!chathis){
        //     console.log('No text');
        // }else{
        //     console.log(`length: ${chathis.length}`);
        // }

        res.render('chatroom', {layout:'layouts/chatlayout', title: "LET's CHAT", username:req.session.username});
    }   
});


module.exports = router;