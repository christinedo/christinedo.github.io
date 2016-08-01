// Node.js Dependencies
const http = require("http");
const path = require("path");

var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

var router = {
    index: require("./routes/index"),
    about: require("./routes/about"),
    podcats: require("./routes/podcats"),
    muirwoods: require("./routes/muirwoods"),
    leicester: require("./routes/leicester")
};

var parser = {
    body: require("body-parser")
};

// Middleware
app.set("port", process.env.PORT || 3000);
app.engine('html', handlebars({ extname: '.html' }));
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(parser.body.urlencoded({ extended: false }));
app.use(parser.body.json());

// Routes
app.get("/", router.index.view);
app.get("/about", router.about.view);
app.get("/podcats", router.podcats.view);
app.get("/muirwoods", router.muirwoods.view);
app.get("/leicester", router.leicester.view);

// Start Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});
