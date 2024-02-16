const db = require("../../utils/config-db");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const getPerson = asyncWrapper(async (req, res, next) => {
	const { id } = req.params;

	const sql = "SELECT * FROM persons WHERE id = ?";
	db.all(sql, [id], (error, rows) => {
		if (error) return next(new CustomError("No person founded", 404));

		const persons = [];
		rows.forEach((row) => {
			persons.push(row);
		});

		if (persons.length === 0)
			return next(new CustomError("No person founded", 404));
		return res.status(200).json({ ok: true, data: persons });
	});
});

module.exports = { getPerson };
