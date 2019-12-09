'use-strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        },
        address : {
            type : DataTypes.STRING
        }
    }, {
        underscored : true
    })

    User.associate = function(models) {
            User.hasMany(models.Post)
    };
     
    return User
}   