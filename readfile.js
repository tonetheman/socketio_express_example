

var fs = require("fs");
var util = require("util");
var stream = require("stream");
var es = require("event-stream");

var line_number = 0;
var s = fs.createReadStream("../messages.txt")
	.pipe(es.split())
	.pipe(es.mapSync(function(line) {
		var oper = line.substr(0,1);
		console.log(oper);
		if (oper == "T") {
			// TODO:
			// read the time from the start of the recording
		}
		if (oper == "M") {
			// this is a message we need to send on
		}
	})
	.on("error", function() {
	})
	.on("end", function() {
		console.log("got an end to the file!");
	})
);
