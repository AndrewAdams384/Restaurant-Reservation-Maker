// Add dependencies
const express = require('express');
const path = require('path');

// Set up express app

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Capture reservation data
const reservations = [
  {
      uniqueId: '', 
      name: '', 
      email: '',
      phone: '',
  }
];

// Capture waitlist data
const waitList = [
{
    uniqueId: '', 
    name: '', 
    email: '',
    phone: '',
}

];

// Routes to HTML Pages

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

// Routes to reservations API

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

// Routes to waitlist API
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });





// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  