const db = require("../../models");
const mongoose = require("mongoose");

module.exports = async function (req, res, next) {
	try {
		const skip = Number(req.query.skip) || 0;
		const userID =
			mongoose.Types.ObjectId(req.query.f) ||
			mongoose.Types.ObjectId("000000000000");

		let followingList = await db.Connect.find(
			{ follower: userID },
			{
				createdAt: 0,
				updatedAt: 0,
				_id: 0,
				follower: 0,
				__v: 0,
			}
		);
		followingList = followingList.map((e) =>
			mongoose.Types.ObjectId(e.followed)
		);

		const step = 5;
		const posts = await db.Post.find({
			user: {
				$in: followingList,
			},
		})
			.sort({ createdAt: "desc" })
			.skip(skip)
			.limit(step)
			.populate("user", {
				username: true,
				profileImageUrl: true,
			});

		return res.status(200).json(posts);
	} catch (e) {
		return next(e);
	}
};
