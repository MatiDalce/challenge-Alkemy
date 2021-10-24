const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerCharacters")



router.get("/", apiController.charactersDetail)

router.post("/", apiController.createCharacter)

router.get("/:id", apiController.iddetail)
router.delete("/id", apiController.destroy)


module.exports = router