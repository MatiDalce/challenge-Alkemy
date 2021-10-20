var express = require('express');
var router = express.Router();
const moviecontroller = require("../controllers/moviecontroller")

/* GET home page. */
router.get('/create', moviecontroller.view)
router.post("/create", moviecontroller.create)

module.exports = router;
