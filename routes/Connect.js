const express = require("express");
const { loginRequired, ensureCorrectUser } = require("../middleware/auth");
const {
	Follow,
	unFollow,
	getFollowers,
	getFollowing,
} = require("../handlers/Connect");

const Router = express.Router({ mergeParams: true });

// Follow and un follow users
Router.route("/:id/:user_id")
	.post(loginRequired, ensureCorrectUser, Follow)
	.delete(loginRequired, ensureCorrectUser, unFollow);

//get users that follow the current user
Router.route("/followers/:id").get(getFollowers);

//Get users that current user follow
Router.route("/following/:id").get(getFollowing);

module.exports = Router;
