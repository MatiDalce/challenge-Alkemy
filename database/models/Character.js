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
        tableName: "Genres",
        timestamps: false
    };

    let Genre = sequelize.define(alias, cols, config);




    return Genre;




}