const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerRegister")



router.post("/register", /*authMiddleware,*/apiController.registerPost)
router.post("/login",/*authMiddleware,*/ apiController.loginPost)





module.exports = router