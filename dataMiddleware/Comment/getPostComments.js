const db = require('../../models');
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = async function(req, res, next){
    try{
        const comments = await db.Comment.find({post: new ObjectId(req.params.post_id)})
        .sort({createdAt: "ascending"})
        .populate("user", {
            username: true,
            profileImageUrl: true 
        });
        return res.status(200).json({comments});
    }
    catch(e){
        return next(e);
    }
}
