const db = require("../../utils/config-db");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const addPerson = asyncWrapper(async (req, res, next) => {
	const { nom, prenom, present } = req.body;

	if (!nom || !prenom) return next(new CustomError("Bad request", 400));

	const sql = "INSERT INTO persons (nom, prenom, present) VALUES(?, ?, ?)";
	db.run(sql, [nom, prenom, present], (error) => {
		if (error) return next(new CustomError("Server error", 500));

		return res
			.status(201)
			.json({ ok: true, message: "Person succefully created" });
	});
});

module.exports = { addPerson };
