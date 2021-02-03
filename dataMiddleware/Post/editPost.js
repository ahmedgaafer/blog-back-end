const db = require('../../models');

module.exports = async function(req, res, next){
    try{
        return res.status(501).json({message:"Not Implemented"})
    }
    catch(e){
        return next(e);
    }
}