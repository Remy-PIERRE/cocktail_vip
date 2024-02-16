const db = require("../../utils/config-db");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const deletePerson = asyncWrapper(async (req, res, next) => {
	const { id } = req.params;

	const sql = "DELETE FROM persons WHERE id = ?";
	db.run(sql, [id], (error) => {
		if (error) return next(new CustomError("Server error", 500));

		return res.status(202).json({ message: "Person succefully deleted" });
	});
});

module.exports = { deletePerson };
