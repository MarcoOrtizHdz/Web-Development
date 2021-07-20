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
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newReservation
    //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);  
    if ( tables.length <= 4 ) {
        tables.push(newReservation);
        //alert("Successful reservation");
    }
    else {
        waitList.push(newReservation);
        //alert("All tables are reserved. You are on the waiting list.");
    }
    
    res.json(newReservation);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});  