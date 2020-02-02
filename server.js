var express = require("express");

var app = express();
var PORT = process.env.PORT || 9000;

// data parsing via Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is to point to the directory where routes, html, css, index.js are
app.use(express.static("public"));
require("./routes/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
    console.log("Woot! Woot! Power up " + PORT)
})