const DBMiddleWare  = require('../dataMiddleware');


module.exports.Follow = DBMiddleWare.Connect.Follow;
module.exports.unFollow = DBMiddleWare.Connect.unFollow;