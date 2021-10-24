module.exports = function (sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING },
        password: { type: dataTypes.DATE }
    };

    let config = {
        tableName: "Users",
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);





    return User;
}