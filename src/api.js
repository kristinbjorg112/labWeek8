// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");
app.get("/greeting/:name", (req, res) => {

 	res.status(200);

 	var returnGreeting = {greeting: "Hello, " + req.params.name + "!"};

 	res.send(returnGreeting);

});
module.exports = app;
