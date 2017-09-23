var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index  = require('./routes/index');
// var gallery = require('./routes/gallery');

//uses
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);
// app.use('/gallery', gallery);

// spin up server
app.listen( 5452, function(){
    console.log('server listening 5452');
});