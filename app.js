//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//var _ = require('lodash');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var messages=[];
var times=[]
var m=""
 app.get('/',(req,res)=>{
   res.render('index',{messages:messages,times:times})

  
 })
 
 app.post('/index',(req,res)=>{
   var text=req.body.message;
   if(text==""){
     return false
   }else{
    messages.push(text);
   } 
    
    
    var hours = new Date().getHours();
  var minutes =  new Date().getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
 hours =hours%12;
  minutes=minutes+30;
  if(minutes>59){
    hours=hours+6;
  }else{
    hours=hours+5;
  }
  var time = hours +':' + minutes + ' ' + ampm;
    times.push(time)

    
    
    
   res.redirect('/')
    })
 app.listen(process.env.PORT||5300,()=>{
   console.log("http://localhost:5300")
 })