
const bcrypt = require("bcrypt")
const secretKey = "123456"



module.exports = (req, res, next) => {

    const auth = req.headers["Authorization"]

    if (!auth) {

        return res.json({ error: true }, 401)
    }

    try {
        const decoded = jwt.verify(auth, secretKey)

        req.user = decoded

        next()
    }


    catch (error) {


        return res.json({ error: true }, 401)
    }





}