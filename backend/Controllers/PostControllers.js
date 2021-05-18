const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
// import and initiate the posts model to query the database
const Posts = mongoose.model("posts");
exports.baseRoute = async (req,  res) => {
    res.render('homepage')
}
exports.getPosts = async (req, res) => {
    const posts = await Posts.find();
    res.json(posts)
}
exports.getCreate = async (req, res) => {
  res.render('create')
}
exports.createPost = async (req, res) => {
  // we use mongodb's save functionality here
  await new Posts(req.body).save((err, data) => {
    if (err) {
      // if there is an error send the following response
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      // if success send the following response
      res.json({'msg' : 'post created successfully~!'})
      res.redirect('/getPosts')
    }
  });
};
exports.singlePosts = async (req, res) => {
    await Posts.find({_id : req.params.id} , (err , data) => {
        if(err)         {
            res.status(400).json({'msg' : 'something went wrong'})
        }
        else {
            console.log(data);
            res.status(200).json(data)
            
        }
    })
}
exports.updatePost = async (req, res) => {
  // get a postID.
  let postID = req.params.id;
  console.log(req.body)
  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await Posts.findByIdAndUpdate({_id: postID},{$set : req.body}, {new : true},(err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Updated again",
         data,
      });
    }
  });
}
exports.deletePost = async (req, res) => {
  await Posts.deleteOne({_id : req.params.id} , (err , data) => {
        if(err) res.json({'msg' : 'data not found'})
        else{
          res.redirect('/getPosts')
        }
  })
}