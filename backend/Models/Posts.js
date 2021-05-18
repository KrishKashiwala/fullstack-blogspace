
const mongoose  = require('mongoose')
mongoose.Promise = global.Promise
const PostsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
        
    },
    description : {
        type : String,
        required : true  
    },
})
module.exports = mongoose.model('posts' , PostsSchema)