var client = require("redis").createClient();

exports.findById = function(req, res) {
    res.send("hello");
};
 
exports.findAll = function(req, res) {
	initializeDb();
	client.get("birthdays", function (error, result) {
        if (error !== null) {
            //handle error here
            console.log("error: " + error);
        } else {
			console.log('Success: ' + JSON.stringify(result[0]));
            res.send(JSON.parse(result))
        }
    });
};

var initializeDb = function (){
	var birthdays = [
		{
			name: "A B",
			month: "12",
			day: "13"
		},
		{
			name: "I A",
			month: "1",
			day: "10",
		},
		{
			name: "J W",
			month: "1",
			day: "28",
		},
		{
			name: "C K",
			month: "1",
			day: "29",
		},
		{
			name: "K M",
			month: "2",
			day: "2",
		},
		{
			name: "K M",
			month: "2",
			day: "2",
		},
		{
			name: "J W",
			month: "2",
			day: "5",
		},
		{
			name: "B N",
			month: "9",
			day: "2",
		},
		{
			name: "P K",
			month: "3",
			day: "6",
		},
		{
			name: "E H",
			month: "3",
			day: "15",
		},
		{
			name: "E H",
			month: "3",
			day: "15",
		},
		{
			name: "D W",
			month: "4",
			day: "17",
		},
			{
			name: "T M",
			month: "5",
			day: "7",
		},
		{
			name: "V C",
			month: "5",
			day: "21",
		},
		{
			name: "C A",
			month: "6",
			day: "5",
		},
		{
			name: "M K",
			month: "6",
			day: "14",
		},
		{
			name: "D L",
			month: "8",
			day: "9",
		},
		{
			name: "F R",
			month: "8",
			day: "10",
		},
		{
			name: "K C",
			month: "8",
			day: "11",
		},
		{
			name: "R S",
			month: "8",
			day: "12",
		},
			{
			name: "C G",
			month: "10",
			day: "9",
		},
			{
			name: "D H",
			month: "10",
			day: "17",
		},
			{
			name: "K W",
			month: "12",
			day: "10",
		}];
	client.set("birthdays", JSON.stringify(birthdays));
}