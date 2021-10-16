module.exports = function (sequelize, dataTypes) {



    let alias = "Genre";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: { type: dataTypes.STRING },
        image: { type: dataTypes.STRING }


    };

    let config = {
        tableName: "Genres",
        timestamps: false
    };

    let Genre = sequelize.define(alias, cols, config);




    return Genre;




}