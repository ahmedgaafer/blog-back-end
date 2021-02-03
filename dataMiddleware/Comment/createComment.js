const db = require('../../models');


module.exports = async function(req, res, next){
    try{
        const comment = await db.Comment.create({
            text: req.body.text,
            user: req.params.id,
            post: req.params.post_id
        });

        return res.status(200).json(comment);
    }
    catch(e){
        return next(e);
    }
}