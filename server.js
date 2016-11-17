"use strict";// it enforces more secure syntax and best practices through stricter syntax constraints
var express=require("express");//including Express as a dependency of our application
var app=express();// initializing Express
var port=process.env.PORT||3000;
var routes = require('./app/routes/index.js');

app.use('/public', express.static(process.cwd() + '/public'));//bind the directory path for /public to a shortcut: /public
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);//allow us to use Express functionality within the scope of our new routes function

/*app.get("/", function(req, res){
  res.sendFile(process.cwd()+"/index.html");//process.cwd() is like __dirname
});//.get is a method that is going to take a request (req) from the client (browser) and respond (res) by sending  a message to the browser*/

app.listen(port, function(){
  console.log("Listening to port: "+port);
});//tell Node which port to listen on
