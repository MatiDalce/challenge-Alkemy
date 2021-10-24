const db = require("../../database/models")
module.exports = 

{charactersDetail: async (req, res) => { 


    const characters = await db.Character.findAll();


    res.json(characters)


},  



createCharacter : async (req,res) => { 
 


new db.Character.create({  

name : req.body.name  ,  
image : req.body.image , 
weight : req.body.weight,  
age: req.body.age, 
history : req.body.history 

}) 

},

iddetail : async (req,res) => { 
 const character = await db.Character.findByPk(req.params.id)


  res.status(202).json(character)

}, 

destroy : async (req, res)=> { 

  await db.Character.destroy({where:{id:req.params.id}})

  res.status(202)

}


}