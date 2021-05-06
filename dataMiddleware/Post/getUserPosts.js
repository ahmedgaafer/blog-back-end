const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        const skip = req.body.skip || 0;
        const step = 5;
        const posts = await db.Post.find({user: req.params.id})
        .sort({createdAt: "desc"})
        .skip(skip).limit(step)
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