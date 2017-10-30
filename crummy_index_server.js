

var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http)


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/fakemain.js",function(req,res){
	res.sendFile(__dirname + "/fakemain.js");
})

io.on("connection", function(socket) {
  console.log("got a connection on io");
  socket.on("start", function(data) {
      console.log("got a start",data);


	var fs = require("fs");
	var util = require("util");
	var stream = require("stream");
	var es = require("event-stream");

	var line_number = 0;
	var s = fs.createReadStream("../messages.txt")
		.pipe(es.split())
		.pipe(es.mapSync(function(line) {
			var oper = line.substr(0,1);
			s.pause();
			console.log(oper);
			if (oper == "T") {
				// TODO:
				// read the time from the start of the recording
			}
			if (oper == "M") {
				// this is a message we need to send on
				var index = line.indexOf("{");
				var string_mesage = line.substring(index);
				socket.emit("msg",string_message);
			}
			s.resume();
		})
		.on("error", function() {
		})
		.on("end", function() {
			console.log("got an end to the file!");
		})
	);  
	});

})


http.listen(3000, function(){
  console.log("listen on 3000");
})
