const createPost = require("./createPost");
const deletePost = require("./deletePost");
const editPost = require("./editPost");
const getAllPosts = require("./getAllPosts");
const getPostById = require("./getPostById");
const getUserPostById = require("./getUserPostById");
const getUserPosts = require("./getUserPosts");

module.exports.createPost = createPost;
module.exports.deletePost = deletePost;
module.exports.editPost = editPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostById = getPostById; // un implemented
module.exports.getUserPostById = getUserPostById;
module.exports.getUserPosts = getUserPosts;
