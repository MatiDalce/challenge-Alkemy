const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController")


router.get("/genres", apiController.genresDetail)
router.get("/characters", apiController.charactersDetail)
router.get("/movies", apiController.moviesDetail)


module.exports = router