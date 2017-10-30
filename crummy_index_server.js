

var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http)


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


io.on("connection", function(socket) {
  console.log("got a connection on io");
  socket.on("start", function(data) {
      console.log("got a start",data);
  });

})


http.listen(3000, function(){
  console.log("listen on 3000");
})
