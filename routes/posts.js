const express    = require('express');
const { createPost, deletePost, getPost, getPosts, getUserPosts } = require('../handlers/posts');

const userRouter = express.Router({mergeParams: true});
const generalRouter = express.Router({mergeParams: true});
//User specific routes requires user Token
userRouter.route('/')
.post(createPost);

userRouter.route('/:post_id')
.get(getPost)
.delete(deletePost);

//General routes requires Just to be logged in
generalRouter.route('/')
.get(getPosts);

generalRouter.route('/:id')
.get(getUserPosts);

module.exports = {
    userRouter,
    generalRouter
};