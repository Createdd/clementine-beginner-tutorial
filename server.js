"use strict";// it enforces more secure syntax and best practices through stricter syntax constraints
var express=require("express");//including Express as a dependency of our application
var app=express();// initializing Express
var port=process.env.PORT||3000;

app.get("/", function(req, res){
  res.sendFile(process.cwd()+"/index.html");//process.cwd() is like __dirname
});//.get is a method that is going to take a request (req) from the client (browser) and respond (res) by sending  a message to the browser

app.listen(port, function(){
  console.log("Listening to port: "+port);
});//tell Node which port to listen on
