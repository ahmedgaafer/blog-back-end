const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        const post = await db.Post.create({
            text: req.body.text,
            user: req.params.id,
        });      

        const foundPost = await db.Post.findById(post.id).populate("user", {
            username: true,
            profileImageUrl: true
        });

        return res.status(200).json(foundPost)
        
    }
    catch (e) {
        return next(e);
    }
}