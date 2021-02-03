const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        const connection = await db.Connect.create({
            follower: req.params.id,
            followed: req.params.user_id,
        });      
        

        return res.status(200).json(connection)
        
    }
    catch (e) {
        return next(e);
    }
}