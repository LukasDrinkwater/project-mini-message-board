var express = require("express");
var router = express.Router();

/* GET honewme page. */
router.get("/", function (req, res, next) {
  res.render("new", { title: "new page" });
});

module.exports = router;
