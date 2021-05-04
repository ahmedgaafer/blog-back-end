const db = require('../../models');
const JWT = require("jsonwebtoken");
const CONFIGS = require('../../config');

module.exports = async function(req, res, next){
    try{

        const user = await db.User.findOne({
            email: req.body.email,
        });
        console.log(req.body)
        if(!user) return res.status(404).json({message:`no user  "${req.body.email}"  found`})
        const { id, username, profileImageUrl } = user;
        const isMatch = await user.comparePassword(req.body.password) ;
        
        if(isMatch){
            const token = JWT.sign({
                id,
                username,
                profileImageUrl,
            }, CONFIGS.SECRET_KEY);
            
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token,
            });
        }
        else{
            return next({
                status: 400,
                message: "Invalid email or password",
            });
        }
    }
    catch(err){
        return next(err);
    }
}