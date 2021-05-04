const db = require('../../models');

module.exports = async function(req, res, next){
    try{

        const post = await db.Post.findById(req.params.post_id)
        post.text = req.body.text;
        await post.save();
        return res.status(200).json(post)
    }
    catch(e){
        return next(e);
    }
}