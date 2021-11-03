const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerMovies.js")



router.get("/",/*authMiddleware,*/ apiController.moviesDetail)
router.post("/:id", /*authMiddleware,*/apiController.moviesCreate)
router.delete("/:id" ,/*authMiddleware,*/ apiController.destroy)

module.exports = router