const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiControllerRegister")



router.post("/register", apiController.registerPost)
router.post("/login", apiController.loginPost)





module.exports = router