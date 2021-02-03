const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        let connection = await db.Connect.find({
            follower: req.params.id,
            followed: req.params.user_id,
        });  
        
        if(connection && connection[0]) {    
            await connection[0].remove();
            return res.status(200).json(connection[0]);
        }

        return res.status(401).json({message: "No connection found between Users"});
        
    }
    catch (e) {
        return next(e);
    }
}