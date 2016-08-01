exports.view = function(req, res) {
   var about = require("../data/about.json");
   res.render('about', about);
}
