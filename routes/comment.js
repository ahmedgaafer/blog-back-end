const express    = require('express');
const { getPostComments, getUserComments, createComment, deleteComment, editComment } = require('../handlers/comment');
const { loginRequired, ensureCorrectUser } = require('../middleware/auth');
const Router = express.Router({mergeParams: true});


Router.route('/post/:post_id')
.get(getPostComments)

Router.route('/post/:post_id/user/:id')
.get(getUserComments)

Router.route('/post/:post_id/user/:id')
.post(loginRequired, ensureCorrectUser, createComment)

Router.route('/post/:post_id/user/:id/comment/:comment_id')
.put(loginRequired, ensureCorrectUser, editComment)
.delete(loginRequired, ensureCorrectUser, deleteComment)



module.exports = Router;