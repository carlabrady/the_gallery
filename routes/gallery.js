var router = require('express').Router();

var pic1 = {
    image: '/images/autumn.PNG',
    info: 'Eva and Iris playing in the autumn leaves.',
    show: true,
};

var pic2 = {
    image: '/images/4generations.jpg',
    info: 'My Grandpa, my Dad, my girls and me!',
    show: true,
};

var pic3 = {
    image: '/images/camping2017.jpg',
    info: 'The first family camping trip of 2017.',
    show: true,
}

var pic4 = {
    image: '/images/europe2000.jpg',
    info: 'Touring Europe with Blue Lake International Choir.',
    show: true,
}

var picArray = [pic1, pic2, pic3, pic4]

router.get('/', function(req, res){
    res.send(picArray);
});

module.exports = router;