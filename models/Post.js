'use-strict'

module.exports = (sequelize, Datatypes) =>{
    const Post = sequelize.define('Post', {
        title : Datatypes.STRING,
        description : Datatypes.STRING
    },
    {
        timestamps : false
    })

    return Post
}