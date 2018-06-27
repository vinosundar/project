var express=require('express')
var nodemailer = require('nodemailer');
var app=express()
var s=require('./proj1.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname))
//app.use('/', express.static(path.join(__dirname, '')))


app.use('/',s);

app.listen(3000);