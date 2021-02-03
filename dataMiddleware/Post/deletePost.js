const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        const foundPost = await db.Post.findById(req.params.post_id);
        const foundComments = await db.Comment.find({post: req.params.post_id});
        for(let i = 0; i < foundComments.length; i++){
            const comment = await db.Comment.findById(foundComments[i]._id);
            await comment.remove();
        }
        await foundPost.remove();
        
        return res.status(200).json(foundPost);
    }
    catch (e){
        return next(e); 
    }
}