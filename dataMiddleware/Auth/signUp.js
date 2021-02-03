const db = require('../../models');
const JWT = require("jsonwebtoken");
const CONFIGS = require('../../config');

module.exports = async function(req, res, next){
    try{
        // Create User
        let user = await db.User.create(req.body);
        let {id, username, profileImageUrl} = user;
        // Create a token
        let token = JWT.sign({
            id,
            username,
            profileImageUrl,
        }, CONFIGS.SECRET_KEY);

        return res.status(201).json({
            id,
            username,
            profileImageUrl,
            token
        })

    } catch (err) {
        if(err.code === 11000){
            err.message = "Error username/ email is taken";
        }
        //If user exist return user exist error
        return next({
            status: 400,
            message: err.message
        });
    }
}