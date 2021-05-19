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
    await Posts.find({_id : req.params.id} , (err , data) => {
       if(err) res.json({'msg' : 'no data found'})
       else{
         res.render('singlepost' , {value : data})
       }
    }).lean()
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