const db = require("../../database/models")
module.exports =

{
  charactersDetail: async (req, res) => {


    const characters = await db.Character.findAll();

    const charactersdetail = []

    characters.forEach(element => {

      charactersdetail.push(
        {
          id: element.id,
          name: element.name,
          image: element.image,
          detail: "http://localhost:3000/api/characters/" + element.id
        }
      )
    });





    res.json(charactersdetail)


  },



  createCharacter: async (req, res) => {



    new db.Character.create({

      name: req.body.name,
      image: req.body.image,
      weight: req.body.weight,
      age: req.body.age,
      history: req.body.history

    })

  },

  iddetail: async (req, res) => {
    const character = await db.Character.findByPk(req.params.id)

    const data = {
      character: character,
      url: "http://localhost:3000/api/characters/" + character.id
    }


    res.status(202).json(data)

  },

  destroy: async (req, res) => {

    await db.Character.destroy({ where: { id: req.params.id } })

    res.status(202)

  }


}