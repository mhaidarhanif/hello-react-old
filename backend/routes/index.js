var express = require("express")
var router = express.Router()

const DATA_PEOPLE = require("../data/people.json")

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(DATA_PEOPLE)
})

module.exports = router
