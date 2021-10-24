const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerGenres")



router.get("/", apiController.genresDetail)





module.exports = router