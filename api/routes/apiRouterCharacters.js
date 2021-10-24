const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerCharacters")



router.get("/", apiController.charactersDetail)
router.get("/:id", apiController.iddetail)
router.post("/", apiController.createCharacter)


module.exports = router