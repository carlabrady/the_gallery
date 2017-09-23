var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res){
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
}); // end base url

module.exports = router;