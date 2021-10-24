const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerMovies.js")



router.get("/", apiController.moviesDetail)

module.exports = router