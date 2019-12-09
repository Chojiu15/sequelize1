const express = require('express')
const app = express()
const models = require('./models')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))

require('./routes/user')(app)
require('./routes/post.js')(app)

models
    .sequelize
    .sync({force : true})
    .then(() => app.listen(3001, console.log('OK')))