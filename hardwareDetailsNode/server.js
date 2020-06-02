const express = require('express');
const app = express();

const cors = require('cors')

const HardwareDetailsController = require('./controller/hardwareController.js');
const hwDet=new HardwareDetailsController();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', hwDet.getdetails);

  var server= app.listen(8080, function(){

    var address= server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", address, port)
  })

