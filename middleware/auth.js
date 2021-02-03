const CONFIGS = require('../config');
const JWT = require('jsonwebtoken');

//USER IS LOGGED IN - Authentication
exports.loginRequired = function(req, res, next){
    try{

        const token = req.headers.authorization.split(" ")[1];
        if(token === CONFIGS.ADMIN_KEY) return next(); 
        
        JWT.verify(token, CONFIGS.SECRET_KEY, function(err, payload){
            if(payload) return next();
            return next({
                status: 401,
                message: "Please login first"
            });
        });
    }
    catch (e){
        return next(
            {
                status: 401,
                message: "Please login first"
            });
    }

}

//CORRECT USER - Authorization
exports.ensureCorrectUser = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(token === CONFIGS.ADMIN_KEY) return next(); 

        JWT.verify(token, CONFIGS.SECRET_KEY, function(err, payload){
            if(payload && payload.id === req.params.id) return next();

            return next({
                status: 401,
                message: "Unauthorized"
            });
        });
    }
    catch (e){
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
}


