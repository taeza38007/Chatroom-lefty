const express = require('express');
const router = express.Router();
const Session = require('../controllers/sessions');
const flash = require('connect-flash');
const Chathistory = require('../models/chathistory');


router.get('/', async (req, res) => {
    if(!req.session.userID){
        res.redirect('/login')
    }else{

        let chathis = await Chathistory.find({});
        if (!chathis){
            console.log('No text');
        }else{
            // console.log(`gth: ${chathis[0]['text']}`); 
        }

        res.render('chatroom', { chathis: Object.values(chathis) , layout:'layouts/chatlayout', title: "LET's CHAT", username:req.session.username});
    }   
});


module.exports = router;