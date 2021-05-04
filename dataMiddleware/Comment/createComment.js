const db = require('../../models');


module.exports = async function(req, res, next){
    try{
        const comment = await db.Comment.create({
            text: req.body.text,
            user: req.params.id,
            post: req.params.post_id
        })


        const resp = await db.Comment.find({_id: comment._id})
        .populate("user", {
            username: true,
            profileImageUrl: true 
        });

        return res.status(200).json(resp);
    }
    catch(e){
        return next(e);
    }
}