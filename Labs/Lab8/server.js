// Dependencies
var express = require("express");
var path = require("path");

// Set up Express
var PORT = 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arrays declaration
var tables = [];
var waitList = [];

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Display Tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// Display Wait List
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);  
    if ( tables.length <= 4 ) {
        tables.push(newReservation);
        res.send(true);
    }
    else {
        waitList.push(newReservation);
        res.send(false);
    }
});
/*
// Clear table
app.post("/api/tables", function(req, res) {
    for ( var i = 0; i < tables.length; i++ ) {
        tables.pop();
    }
    for ( var i = 0 ; i < waitList.length; i++ ) {
        waitList.pop();
    }
    console.log("Tables cleared");
    res.send(true);
});*/

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});  