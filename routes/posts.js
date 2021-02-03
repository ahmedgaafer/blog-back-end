const express    = require('express');
const { createPost, deletePost, getAllPosts, getUserPostById, getUserPosts} = require('../handlers/posts');
const { loginRequired, ensureCorrectUser } = require('../middleware/auth');

const Router = express.Router({mergeParams: true});

//User specific routes requires user Token
Router.route('/user/:id')
.post(loginRequired, ensureCorrectUser, createPost);

Router.route('/:post_id/user/:id')
.get(loginRequired, getUserPostById)
.delete(loginRequired, ensureCorrectUser, deletePost);

//General routes requires Just to be logged in
Router.route('/')
.get(getAllPosts);

Router.route('/:id')
.get(getUserPosts);

module.exports = Router;