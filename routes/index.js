exports.view = function(req, res) {
   var index = require("../data/index.json");

   res.render('index', index);
}
