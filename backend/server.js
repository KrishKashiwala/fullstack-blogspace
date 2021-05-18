const mongoose = require('mongoose')
require('dotenv').config({path :  '.env'})
mongoose.Promise = global.Promise
// database connection
require('./Models/Posts')
const app = require('./app')
mongoose.connect(process.env.DATABASE , {useUnifiedTopology : true , useNewUrlParser : true})
mongoose.connection.on('error',(err) => console.log(`DATABASE ERROR => ${err.message}`))
const server = app.listen(3000 , () => console.log('server listening -> port 3000'))
