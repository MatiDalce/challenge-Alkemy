module.exports = function (sequelize, dataTypes) {

    let alias = "Movies";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: { type: dataTypes.STRING },
        image: { type: dataTypes.STRING },
        createDate : { type: dataTypes.DATE},
        rating: { type: dataTypes.INTEGER}
    };

    let config = {
        tableName: "Genres",
        timestamps: false
    };

    let Genre = sequelize.define(alias, cols, config);

  
    return Genre;
}
