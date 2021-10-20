const db = require("../../database/models")

module.exports = {

moviesDetail : async (req,res) =>{ 
 

const movies = await db.Movie.findAll();



res.json(movies)




},

charactersDetail: async( req,res) => { 

res.json()


 } , 

genresDetail: async (req,res) => { 


    res.json()
}








 }