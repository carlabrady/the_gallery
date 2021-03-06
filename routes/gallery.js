var router = require('express').Router();

var pic1 = {
    image: '/images/autumn.jpeg',
    info: 'Eva and Iris playing in the autumn leaves.',
    likes: 0
};

var pic2 = {
    image: '/images/4generations.jpg',
    info: 'My Grandpa, my Dad, my girls and me!',
    likes: 0
};

var pic3 = {
    image: '/images/emily_carla.jpg',
    info: 'My sister and I enjoyed playing in the rain.',
    likes: 0
}

var pic4 = {
    image: '/images/camping2017.jpg',
    info: 'The first family camping trip of 2017.',
    likes: 0
}

var pic5 = {
    image: '/images/europe2000.jpg',
    info: 'Touring Europe with Blue Lake International Choir.',
    likes: 0
}

var pic6 = {
    image: '/images/brady_wedding.jpg',
    info: 'Me and my best friend on our wedding day.',
    likes: 0
}

var picArray = [pic1, pic2, pic3, pic4, pic5, pic6]

router.put('/', function(req, res){
    console.log(req.body);
    picArray[req.body.index].likes++;
    res.sendStatus(200);
})

router.get('/', function(req, res){
    res.send(picArray);
});

module.exports = router;