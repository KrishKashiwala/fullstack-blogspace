const express = require('express')
const exphbs = require('express-handlebars')
const app = express();
app.engine('.hbs' , exphbs({extname : '.hbs'}))
app.set('view engine','.hbs')
app.use('/' , require('./Routes/PostsRoutes'))
module.exports = app;