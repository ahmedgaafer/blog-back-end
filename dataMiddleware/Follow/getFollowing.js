const db = require("../../models");

module.exports = async function (req, res, next) {
	try {
		let connection = await db.Connect.find(
			{
				follower: req.params.id,
			},
			{
				createdAt: 0,
				updatedAt: 0,
				_id: 0,
				follower: 0,
				__v: 0,
			}
		);

		return res.status(200).json(connection.map((e) => e.followed));
	} catch (e) {
		return next(e);
	}
};
