const db = require("../../database/models")
module.exports = {
    moviesDetail: async (req, res) => {



        const movies = await db.Movie.findAll({ include: [{ association: "movieGenre" }] })
        res.json(movies)
    },

    moviesCreate : async (req,res) => {  
         
  await new db.Movie.create({  

     title : req.body.title,
     image : req.body.image,
     released: req.body.realease,
     rating : req.body.rating

  })
  
    }, 

    destroy : async (req,res) => {  

    db.Movie.destroy({where: { id : req.params.id }})
    }

}