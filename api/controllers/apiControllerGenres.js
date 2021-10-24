const db = require("../../database/models")

module.exports = {


genresDetail: async (req,res) => { 


    const genres = await db.Genre.findAll()


    res.json(genres)
}

 }