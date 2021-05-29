const db = require("../../models");
const CONFIGS = require("../../config");

module.exports = async function (req, res, next) {
	try {
		let { q } = req.query;
		// prettier-ignore
		q = q.replace(".", '\\.');

		console.log(q);
		// find user
		let users = await db.User.find({
			email: new RegExp(`${q}`, "ig"),
		});
		users = users.map((user) => {
			return {
				id: user._id,
				name: user.username,
				email: user.email,
				img: user.profileImageUrl,
			};
		});
		return res.status(200).json(users);
	} catch (err) {
		//If user exist return user exist error
		return next({
			status: 400,
			message: err.message,
		});
	}
};
