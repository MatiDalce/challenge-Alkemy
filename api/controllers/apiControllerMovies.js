const db = require("../../database/models")
module.exports =   {
                    moviesDetail: async (req, res) => {



                        const movies = await db.Movie.findAll({include:[{association:"movieGenre"}]})
                                      res.json(movies) }    
 
          }