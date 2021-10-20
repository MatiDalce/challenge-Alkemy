const db = require("../database/models")
const Op = db.Sequelize.Op

module.exports = { 

view: async (req, res) => {    
    
    const genres = await db.Genre.findAll();
    


    const viewData = {genres}
    
    res.render("createMovie", viewData)},



create : async(req,res) => {   

   

await db.Movie.create({
    title: req.body.title,
    image: req.file,
   genre: req.body.genre,
    realeased: req.body.realeased,
    rating: req.body.rating})

    console.log(req.body)



    res.redirect("/")
}
}