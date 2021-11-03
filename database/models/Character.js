module.exports = function (sequelize, dataTypes) {



    let alias = "Character";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: { type: dataTypes.STRING },
        image: { type: dataTypes.STRING },
        weight : {type:dataTypes.INTEGER},
        age: {type:dataTypes.INTEGER}, 
        history: { type: dataTypes.TEXT}


    };

    let config = {
        tableName: "Characters",
        timestamps: false
    };

    let Character = sequelize.define(alias, cols, config);

    /*  Character.associate = function(models) { 

         Character.belongsToMany(models.Movie , { 
             as: "movies",
             through: "charactersmovie",
             foreignkey: "character_id",
             otherkey: "movie_id",
             timestamps:false
          })
    }*/





    return Character;




}