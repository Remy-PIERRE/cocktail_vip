const db = require("../../utils/config-db");
const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const getPersons = asyncWrapper(async (req, res, next) => {
	const sql = "SELECT * FROM persons";
	db.all(sql, [], (error, rows) => {
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

module.exports = { getPersons };
