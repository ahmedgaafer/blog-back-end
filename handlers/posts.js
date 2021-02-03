const DBMiddleWare  = require('../dataMiddleware');


exports.createPost = DBMiddleWare.Post.createPost;

exports.updatePost = DBMiddleWare.Post.editPost;

exports.getUserPostById = DBMiddleWare.Post.getUserPostById;

exports.deletePost = DBMiddleWare.Post.deletePost;

exports.getAllPosts = DBMiddleWare.Post.getAllPosts;

exports.getUserPosts = DBMiddleWare.Post.getUserPosts;
