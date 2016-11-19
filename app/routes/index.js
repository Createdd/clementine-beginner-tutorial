'use strict';

var ClickHandler=require(process.cwd()+"/app/controllers/clickHandler.server.js");//storing the function object we created in the clickHandler.server.js file
module.exports=function(app,db){
  var clickHandler= new ClickHandler(db);//instantiating a new clickHandler object with db as argument. this allows us to reference the methods
  app.route("/")
      .get(function(req,res){
        res.sendFile(process.cwd()+"/public/index.html");
      });
  app.route("/api/clicks")
      .get(clickHandler.getClicks)//defining a new route and execute the controller function to get results from the database
      .post(clickHandler.addClick)//defining a new route and execute the controller function to post results to the database
      .delete(clickHandler.resetClicks);//defining a new route and execute the controller function to delete results from the database
};//.route is an alternative to app.get, and let's us bundle together several types of routes for a single page request
