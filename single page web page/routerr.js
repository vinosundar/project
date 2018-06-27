var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var SchemaTypes=mongoose.Schema.Types;
var express =require('express')
var path =require('path')
var router=express.Router()
var coll=require('./contact.js')
var nodemailer = require('nodemailer');


router.get('/',function(req,res)
{
	res.sendFile(path.join(__dirname,'/proj.html'))
})
router.get(' /listcontact',function(req,res){
	coll.find({},function(err,data){
		
		res.json({data})
	})
})

router.post('/createuser',function(req,res){

	var user=new coll({"name":req.body.name,"people":req.body.people,"date":req.body.date,"message":req.body.message,"mail":req.body.mail}	)
	console.log(user);
	var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: req.body.mail,
    pass: req.body.pass
  }
});

var mailOptions = {
  from: req.body.mail,
  to: 'vinosundar2898@gmail.com',
  subject: 'PIZZA RESTRAUNT',
  text: req.body.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
	user.save(function(err,data)
	{
		
		  console.log(data);
		 res.json({data})
		
	})

	

	})
module.exports=router;