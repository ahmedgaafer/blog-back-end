const db = require('../../models');


module.exports = async function(req, res, next){
    try{
        const comments = await db.Comment.find({
            user: req.params.id,
            post: req.params.post_id
        });
     
        return res.status(200).json({comments});
    }
    catch(e){
        return next(e);
    }
}