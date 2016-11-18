'use strict';

function clickHandler (db) {
    var clicks = db.collection('clicks');//name the collection clicks and store it in a variable
    this.getClicks = function (req, res) {
        var clickProjection = { '_id': false };//setting the mongodb id to false to not show up
        clicks.findOne({}, clickProjection, function (err, result) {
            if (err) {
              throw err;
            }
            if(result){
              res.json(result);//send a response to the browser in JSON
            } else {
              clicks.insert({"clicks":0}, function(err,doc){
                if(err){
                  throw err;
                }
                clicks.findOne({},clickProjection, function(err,doc){
                  if(err){
                    throw err;
                  }
                  res.json(doc);
                });//find the new inserted document and return the JSON document
              });//if no result is returned insert a new document
            }
        });//findOne method is a MongoDB query that returns the first document that meets the criteria
    };//getClicks method taking a request and response as parameters
}//a client-side controller that registers clicks
module.exports = clickHandler;//export the function object to be used elsewhere in node
