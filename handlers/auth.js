const DBMiddleWare  = require('../dataMiddleware');

// POST /api/auth/signIn
exports.signIn = DBMiddleWare.Auth.signIn;
    
// POST /api/auth/signUp
exports.signUp = DBMiddleWare.Auth.signUp;

// DELETE /api/auth/deleteUser
exports.deleteUser = DBMiddleWare.Auth.deleteUser;