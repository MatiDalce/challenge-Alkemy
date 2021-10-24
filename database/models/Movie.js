module.exports = function (sequelize, dataTypes) {

    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: { type: dataTypes.STRING },
        image: { type: dataTypes.STRING },
        released: { type: dataTypes.DATE },
        rating: { type: dataTypes.INTEGER }
    };

    let config = {
        tableName: "Movies",
        timestamps: false
    };

    let Movie = sequelize.define(alias, cols, config);


    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {
            as: 'movieGenre',
            foreignKey: 'genre_id',
        })
    }


    return Movie;
}
