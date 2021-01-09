const db = require('../models');
const JWT = require("jsonwebtoken");
const CONFIGS = require('../config');

// POST /api/auth/signin
exports.signIn = async function(req, res, next){
    try{

        const user = await db.User.findOne({
            email: req.body.email,
        });

        const { id, username, profileImageUrl } = user;
        const isMatch = await user.comparePassword(req.body.password) ;
        console.log(isMatch)
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
    
// POST /api/auth/signup
exports.signUp = async function(req, res, next){
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
};