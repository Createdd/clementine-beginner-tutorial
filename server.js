"use strict";// it enforces more secure syntax and best practices through stricter syntax constraints
var express=require("express");
var app=express();
var port=process.env.PORT||3000;

app.get("/", function(req, res){
  res.send("It is working!!!!");
})

app.listen(port, function(){
  console.log("Listening to port: "+port);
});
