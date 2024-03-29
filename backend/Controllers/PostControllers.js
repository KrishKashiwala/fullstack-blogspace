const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Posts = mongoose.model("posts");
exports.baseRoute = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts)
}
exports.getPosts = async (req, res) => {
  const posts = await Posts.find({}).sort({ title: 1 }).lean();
  res.json(posts)
}
exports.getCreate = async (req, res) => {
  res.render('create')
}
exports.createPost = (req, res) => {
  // we use mongodb's save functionality here
  new Posts(req.body).save((err, data) => {
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
      res.redirect('http://localhost:3000/')
      //  res.redirect('/getPosts')

    }
  });
};
exports.singlePosts = async (req, res) => {
  const posts = await Posts.find({ _id: req.params.id }).lean()
  res.json(posts)

}
exports.getUpdate = async (req, res) => {
  const posts = await Posts.find({ _id: req.params.id }).lean();
  res.render('update', { data: posts });
}
exports.updatePost = async (req, res) => {
  // get a postID.

  console.log(req.body)
  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await Posts.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, (err, data) => {
    if (err) console.log(req.body)
    else {
      res.redirect('http://localhost:3000')
    }
  });
}
exports.getDelete = async (req, res) => {
  await Posts.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({
      'msg': 'cannot delete post'
    })
    else {
      console.log(data)
      res.redirect('http://localhost:3000/')
    }
  })

}
exports.deletePost = async (req, res) => {
  await Posts.findOneAndDelete({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ 'msg': 'data not found' })
    else {
      res.json(data)
    }

  })
}