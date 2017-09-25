var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index  = require('./routes/index');
var gallery = require('./routes/gallery');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', index);
app.use('/gallery', gallery);

// spin up server
app.listen(process.env.PORT || 5452);
