const express = require("express");
var http = require("http");
var app = require("./config/express")(app);
require("./config/passport")();

const url =
  "mongodb://dswa5:dswa5@cluster0-shard-00-00.bodcm.mongodb.net:27017,cluster0-shard-00-01.bodcm.mongodb.net:27017,cluster0-shard-00-02.bodcm.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-fbwbp2-shard-0&authSource=admin&retryWrites=true&w=majority";

require("./config/database.js")(url);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express Server escutando na porta " + app.get("port"));
});
