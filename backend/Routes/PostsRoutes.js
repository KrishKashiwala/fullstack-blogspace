const express = require('express')
const mongoose = require('mongoose')
const posts = mongoose.model('posts')
const postController =  require('../Controllers/PostControllers')
const router = express.Router()
router.use(express.urlencoded({extended: false}))
router.use(express.json())
router.get('/' , postController.baseRoute)
router.get('/getPosts' , postController.getPosts)
router.get('/getCreate' , postController.getCreate)
router.post('/create' , postController.createPost)
router.get('/getPosts/:id' , postController.singlePosts)
router.put('/post/:id/update' , postController.updatePost)
router.delete('/post/:id/delete' , postController.deletePost)
module.exports = router