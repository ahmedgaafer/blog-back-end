const express    = require('express');
const { getComment, getComments, getUserComments, addComment, editComment, deleteComment } = require('../handlers/comment');

const getRouter = express.Router({mergeParams: true});
const postRouter = express.Router({mergeParams: true});

getRouter.route('/')
.get(getComments)

getRouter.route('/user/:user_id')
.get(getUserComments)

postRouter.route('/')
.post(addComment)

postRouter.route('/:comment_id')
.get(getComment)
.put(editComment)
.delete(deleteComment)



module.exports = {
    getRouter,
    postRouter
}