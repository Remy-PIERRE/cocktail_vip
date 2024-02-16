const db = require("../../utils/config-db");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const updatePerson = asyncWrapper(async (req, res, next) => {
	const { id } = req.params;
	const { nom, prenom, present } = req.body;

	const sql =
		"UPDATE persons SET present = ?, nom = ?, prenom = ? WHERE id = ?";
	db.run(sql, [present, nom, prenom, id], (error) => {
		if (error) return next(new CustomError("Server error", 500));

		return res.status(201).json({ message: "Person succefully updated" });
	});
});

module.exports = { updatePerson };
