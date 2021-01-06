const db = require('../models');


//  POST /api/users/:id/posts 
 exports.createPost = async function(req, res, next){
     try{
        const post = await db.Post.create({
            text: req.body.text,
            user: req.params.id,
            comments: []
        });

     
        const foundUser = await db.User.findById(req.params.id);
        foundUser.posts.push(post.id);
        await foundUser.save();
    
        const foundPost = await db.Post.findById(post.id).populate("user", {
            username: true,
            profileImageUrl: true
        });

        return res.status(200).json(foundPost)
        
     }
     catch (e) {
        return next(e);
     }
 }

 //  GET /api/users/:id/posts/:post_id 
 exports.getPost = async function(req, res, next){
    try{
        const post = await db.Post.findById(req.params.post_id);
        return res.status(200).json(post);
    }
    catch (e){
       return next(e); 
    }
 }

 //  DELETE /api/users/:id/posts/:post_id 
 exports.deletePost = async function(req, res, next){
    try{
        const foundPost = await db.Post.findById(req.params.post_id);
        await foundPost.remove();
        
        return res.status(200).json(foundPost);
    }
    catch (e){
       return next(e); 
    }
 }

 //  GET /api/posts
 exports.getPosts = async function(req, res, next){
   try{
      const posts = await db.Post.find({})
      .sort({createdAt: "desc"})
      .populate("user", {
        username: true,
        profileImageUrl: true 
      });

      return res.status(200).json(posts);
   }
   catch (e) {
       return next(e);
   }
}

//  GET /api/posts/:id
exports.getUserPosts = async function(req, res, next){
   try{
      const posts = await db.Post.find({user: req.params.id})
      .sort({createdAt: "desc"})
      .populate("user", {
        username: true,
        profileImageUrl: true 
      });

      return res.status(200).json(posts);
   }
   catch (e) {
       return next(e);
   }
}
