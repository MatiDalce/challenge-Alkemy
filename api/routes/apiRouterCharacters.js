const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerCharacters")
const authMiddleware = require("../middlewares/authmiddleware")



router.get("/", /*authMiddleware,*/ apiController.charactersDetail)

router.post("/",/*authMiddleware,*/ apiController.createCharacter)

router.get("/:id",/*authMiddleware,*/ apiController.iddetail)
router.delete("/id",/*authMiddleware,*/ apiController.destroy)


module.exports = router