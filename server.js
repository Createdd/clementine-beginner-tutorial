"use strict";// it enforces more secure syntax and best practices through stricter syntax constraints
var express=require("express");//including Express as a dependency of our application
var app=express();// initializing Express
var port=process.env.PORT||3000;
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;//requiring the MongoDB Node.js driver with - MongoClient() is an object that allows use to use functionality like connect. Initialize express before connecting to mongodb!!!

mongo.connect('mongodb://test:test@ds155747.mlab.com:55747/beginnertutorial', function (err, db) {
  if(err){
    throw new Error("Database failed to connect!!!!");
  } else {
    console.log("MongoDB connected successfully!")
  }
  app.use('/public', express.static(process.cwd() + '/public'));//bind the directory path for /public to a shortcut: /public
  app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

  routes(app, db);//allow us to use Express functionality within the scope of our new routes function. to help pass data between the database on the client-side of our application

  app.listen(port, function(){
    console.log("Listening to port: "+port);
  });//tell Node which port to listen on
});//connect to the MongoDB database using the connect method of the MongoClient object. - Port 27017 is the default port that MongoDB uses - clementinejs is the actual name of the database within MongoDB
