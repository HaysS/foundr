const router = require('express').Router();

router.get('/', function(req, res){    
    res.send("Connected to Foundr API.");
});

//Group routers here
router.use('/users', require('./users'))

module.exports = router;