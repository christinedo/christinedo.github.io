exports.view = function(req, res) {
   var podcats = require("../data/podcats.json")
   res.render('podcats', podcats);
}
