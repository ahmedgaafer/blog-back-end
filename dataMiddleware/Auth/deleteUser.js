const db = require('../../models');
const CONFIGS = require('../../config');
const { getUserPostById } = require('../Post');

module.exports = async function(req, res, next){
    try{
        const {email} = req.body;
        // find user
        let user = await db.User.find({email});
        let {_id} = user["0"];
        // delete the user
        await db.User.deleteOne({_id});

        return res.status(200).json({
            ...user
        })

    } catch (err) {
        
        //If user exist return user exist error
        return next({
            status: 400,
            message: err.message
        });
    }
}