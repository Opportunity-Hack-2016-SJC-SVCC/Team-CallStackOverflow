var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getPoliceLocations', function(req, res, next) {
  var myURL = "https://api-3.gershad.com:1935/v1.0/1/view/";
  var myData = req.body;

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xhr = new XMLHttpRequest();
  xhr.open('post', myURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
console.log(myData);
  // send the collected data as JSON
  xhr.send(JSON.stringify(myData));
console.log("Sent");
  xhr.onloadend = function () {
    // done

    console.log(xhr.responseText);

    res.send(xhr.responseText);
  };
});






module.exports = router;
