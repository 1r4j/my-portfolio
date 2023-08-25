var http = require('http');
var fs = require('fs');

const PORT = 8080;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;
});


// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + './index.html'));

// app.listen('3000');
// console.log('working on 3000');