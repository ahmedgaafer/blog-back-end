const DBMiddleWare = require("../dataMiddleware");

// POST /api/auth/signIn
exports.signIn = DBMiddleWare.Auth.signIn;

// POST /api/auth/signUp
exports.signUp = DBMiddleWare.Auth.signUp;

// DELETE /api/auth/deleteUser
exports.deleteUser = DBMiddleWare.Auth.deleteUser;

// GET /api/auth/getUser/:id
exports.getUser = DBMiddleWare.Auth.getUser;

// GET /api/auth/userSearch?q=<val>
exports.userSearch = DBMiddleWare.Auth.userSearch;
