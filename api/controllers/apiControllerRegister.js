const db = require("../../database/models")
const Op = db.Sequelize.Op


module.exports = {

    registerPost: async (req, res) => {

        await db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.status(202)

    },


    loginPost: async (req, res) => {





    }



}