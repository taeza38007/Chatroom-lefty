const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.redirect('login');
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