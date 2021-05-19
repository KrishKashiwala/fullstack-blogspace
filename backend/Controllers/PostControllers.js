const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Posts = mongoose.model("posts");
exports.baseRoute = async (req,  res) => {
    const posts = await Posts.find();
    res.json(posts)
}
exports.getPosts = async (req, res) => {
    const posts = await Posts.find({}).lean();
    res.render('home' , {data : posts});
}
exports.getCreate = async (req, res) => {
  res.render('create')
}
exports.createPost = async (req, res) => {
  // we use mongodb's save functionality here
  await new Posts(req.body).save((err, data) => {
    if (err) {
      // if there is an error send the following response
      console.log(data)
      res.status(500).json({
        message:
          "Something went wrong, please try again later.",
      });
    } else {
      // if success send the following response
      console.log(data)
     res.redirect('/getPosts')
  
    }
  });
};
exports.singlePosts = async (req, res) => {
    const posts = await Posts.find({_id : req.params.id}).lean()
    
}
exports.getUpdate = async (req, res) => {
  const posts = await Posts.find({_id : req.params.id}).lean();
  res.render('update' , {data : posts});
}
exports.updatePost = async (req, res) => {
  // get a postID.
  
  console.log(req.body)
  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await Posts.findOneAndUpdate({_id: req.params.id}, {$set: req.body} ,{new : true},(err, data) => {
    if (err) console.log(req.body)
    else {
      res.redirect('/getPosts')
    }
  });
}
exports.getDelete = async (req , res) => {
    await Posts.deleteOne({_id : req.params.id} , (err , data) => {
        res.redirect('/getPosts')
    })
    
}
exports.deletePost = async (req, res) => {
  await Posts.findOneAndDelete({_id : req.params.id} , (err , data) => {
        if(err) res.json({'msg' : 'data not found'})
        else{
          res.json(data)
        }

  })
}