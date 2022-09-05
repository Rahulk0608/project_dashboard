
const path = require("path");
const express = require("express");

const app = express();

const staticPath = path.join(__dirname, "../public");

//builtin middleware
app.use(express.static(staticPath))

app.get("/", function(req, res){
  res.sendFile(__dirname +"/index.html");
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});
