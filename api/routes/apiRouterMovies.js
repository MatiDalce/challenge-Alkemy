const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerMovies.js")



router.get("/", apiController.moviesDetail)
router.post("/:id", apiController.moviesCreate)
router.delete("/:id" , apiController.destroy)

module.exports = router