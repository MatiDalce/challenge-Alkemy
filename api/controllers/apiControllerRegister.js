const db = require("../../database/models")

const bcrypt = require("bcrypt")
const secretKey = "123456"


module.exports = {

    registerPost: async (req, res) => {

        const hashedpass = bcrypt.hashSync(req.body.password, 10);

        const user = await db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedpass
        })
        
        const token = jwt.sign(user.toJSON(), secretKey)
        res.status(202).json({token, user})


    },


    loginPost: async (req, res) => {



        const hashedpass = bcrypt.compareSync(req.body.password, user.password);

        const user = await User.findOne({ where: { email: req.body.email } })

        if (!user) { res.json({ error: true }, 401) }


        const token = jwt.sign(user.toJSON(), secretKey)

        res.status(202).json({token, user})


    }

}