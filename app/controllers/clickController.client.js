"use strict";

(function(){
  //Creating the controller
  var addButton=document.querySelector(".btn-add");
  var deleteButton=document.querySelector(".btn-delete");
  var clickNbr=document.querySelector("#click-nbr");
  var apiUrl="http://localhost:3000/api/clicks";

  //creating the controller functions
  function ready(fn){
    if(typeof fn !== "function") {
      return;
    }//prevents elements like arrays and strings being provided as arguments
    if(document.readyState === "complete"){
      return fn();
    }//when the document is ready provide the function passed as an argument
    document.addEventListener("DOMContentLoaded", fn, false);//add an eventListener if the document is not loaded
  }
  function ajaxRequest(method, url, callback){
    var xmlhttp=new XMLHttpRequest();//create a new Request object to use it's methods
    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState===4 && xmlhttp.status===200){
        callback(xmlhttp.response);
      }//if the operation has been completed and OK, execute the callback function from the argument
    };//assign a callback function to the property onreadystatechange
    xmlhttp.open(method, url, true);//when the function is called initiate the request
    xmlhttp.send();//execute the initiated request
  }//create a function that handles the method(GET,POST,DELETE), the url for the request and the callback function

  function updateClickCount(data){
    var clicksObject=JSON.parse(data);//convert the data argument to a JSON object
    clickNbr.innerHTML=clicksObject.clicks;//output the data
  }//update HTML

  ready(ajaxRequest("GET", apiUrl, updateClickCount));//execute the ready function passing in the ajax function
  addButton.addEventListener("click", function(){
    ajaxRequest("POST", apiUrl, function(){
      ajaxRequest("GET", apiUrl, updateClickCount);
    });
  }, false);//add EventListener that sends a POST request that increases the count and GETs the value of clicks back

  deleteButton.addEventListener("click", function(){
    ajaxRequest("DELETE", apiUrl, function(){
      ajaxRequest("GET", apiUrl, updateClickCount);
    });
  }, false);//add EventListener that sends a DELETE request that sets the count to 0 and GETs the value of clicks back

})();//call an immediately invoked function expression
