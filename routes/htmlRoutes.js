// html path
var path = require("path");

module.exports = function(app) {

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"));
    });

    app.use("/style.css", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/assets/css"));
    });

    app.use("/script.js", function(req, res) {
        res.sendFile(patch.join(__dirname, "../public/assets/js"));
    });

}