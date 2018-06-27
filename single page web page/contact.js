var mongoose=require('mongoose');
var Scheme=mongoose.Schema;
console.log("Connecting..")
mongoose.connect('mongodb://localhost:27017/vino')
var acc=new Scheme({
"name":String,
"people":Number,
"date": {type:Date, default :Date},
"message":String,
"mail": String,
"pass":String,
})
mongoose.connection.once("open",function(){
console.log("db connected")
})
var colle=mongoose.model("mycontact",acc,'mycontact')
module.exports=colle
