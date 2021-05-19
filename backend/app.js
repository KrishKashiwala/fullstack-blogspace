const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.engine('.hbs' , exphbs({defaultLayout : 'main' ,extname : '.hbs'}))
app.set('view engine','.hbs')
app.use('/' , require('./Routes/PostsRoutes'))
module.exports = app;