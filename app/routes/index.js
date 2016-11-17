'use strict';

module.exports=function(app){
  app.route("/")
      .get(function(req,res){
        res.sendFile(process.cwd()+"/public/index.html");
      });
};//.route is an alternative to app.get, and let's us bundle together several types of routes for a single page request
