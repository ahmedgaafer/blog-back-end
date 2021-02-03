const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        const posts = await db.Post.find({})
        .sort({createdAt: "desc"})
        .populate("user", {
            username: true,
            profileImageUrl: true 
        });

        return res.status(200).json(posts);
    }
    catch (e) {
            return next(e);
    }
}