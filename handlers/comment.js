const DBMiddleWare  = require('../dataMiddleware');



exports.getPostComments = DBMiddleWare.Comment.getPostComments;


exports.getUserComments = DBMiddleWare.Comment.getUserComments


exports.createComment = DBMiddleWare.Comment.createComment;


exports.editComment = DBMiddleWare.Comment.editComment;


exports.deleteComment = DBMiddleWare.Comment.deleteComment;