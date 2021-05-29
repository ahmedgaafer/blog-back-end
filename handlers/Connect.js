const DBMiddleWare = require("../dataMiddleware");

module.exports.Follow = DBMiddleWare.Connect.Follow;
module.exports.unFollow = DBMiddleWare.Connect.unFollow;
module.exports.getFollowers = DBMiddleWare.Connect.getFollowers;
module.exports.getFollowing = DBMiddleWare.Connect.getFollowing;
