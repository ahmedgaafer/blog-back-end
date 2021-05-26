const db = require("../../models");
const CONFIGS = require("../../config");
const mongoose = require("mongoose");

module.exports = async function (req, res, next) {
	try {
		const id = String(req.params.id);
		// find user
		const user = await db.User.findById(id);
		const followers = await (
			await db.Connect.find({ followed: id })
		).length;
		const following = await (
			await db.Connect.find({ follower: id })
		).length;

		const numberOfPosts = await (await db.Post.find({ user: id })).length;

		return res.status(200).json({
			name: user.username,
			email: user.email,
			img: user.profileImageUrl,
			numberOfPosts,
			followers,
			following,
		});
	} catch (err) {
		//If user exist return user exist error
		return next({
			status: 400,
			message: err.message,
		});
	}
};
