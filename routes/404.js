const express = require('express');
const router = express.Router();

router.use((req, res) => {
    res.render('error/404', { title: 'ERROR Boi'});
});

module.exports = router;