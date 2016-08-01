exports.view = function(req, res) {
   var leicester = require("../data/leicester.json");
   res.render('leicester', leicester);
}
