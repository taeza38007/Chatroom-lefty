const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('chatroom', { layout:'layouts/chatlayout', title: "LET's CHAT"});
});


module.exports = router;