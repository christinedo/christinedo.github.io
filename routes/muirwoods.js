exports.view = function(req, res) {
   var mwch = require("../data/muirwoods.json");
   res.render('muirwoods', mwch);
}
