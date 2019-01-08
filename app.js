const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/whoami", function(req, res) {
  console.log(req.headers);
  res.json(req.headers);
});

app.listen(3002, function() {
  console.log("Node is Running Microservice");
});
