const mongoose = require('mongoose');
const CONFIGS = require('../config');
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(CONFIGS.MONGO_URI,{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports.User = require('./user');
module.exports.Post = require('./post');
module.exports.Comment = require('./comments');
module.exports.Connect = require('./follow');