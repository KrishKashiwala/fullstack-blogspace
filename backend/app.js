const express = require('express')
const exphbs = require('express-handlebars')
var cors = require('cors')
const logger = require('morgan')
const app = express();
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(logger('dev'))
app.engine('.hbs' , exphbs({defaultLayout : 'main' ,extname : '.hbs'}))
app.set('view engine','.hbs')
app.use('/' , require('./Routes/PostsRoutes'))
module.exports = app;