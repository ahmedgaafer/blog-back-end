const { response } = require("express")

module.exports =  function errorHandler(error, req, res, next){
    return res.status(error.status || 500).json({
        error: {
            message: error.message || "Internal Server Error."
        }
    });
}