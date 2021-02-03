const db = require('../../models');


module.exports = async function(req, res, next){
    try{
        const comment = await db.Comment.findById(req.params.comment_id);
        const allComments    = await db.Comment.find({post: req.params.post_id});
        let isIncluded = false;
        allComments.forEach(c => {
            if(c._id == req.params.comment_id) isIncluded = true;
        });
        if(!isIncluded) {
            return next({
                status: 401,
                message: "Unauthorized"
            });
        }
        
        comment.text = req.body.text;
        await comment.save();
        return res.status(200).json({comment});
    }
    catch(e){
        return next(e);
    }
}