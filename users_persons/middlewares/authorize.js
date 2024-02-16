const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
	try {
		const token = req.header("authorization").split(" ")[1];
		const decodedToken = jwt.verify(token, "jwt_secret");
		req.userId = decodedToken.userId;

		next();
	} catch (error) {
		res
			.status(401)
			.json({ message: "Unauthorized. Please login to existing account." });
	}
};

module.exports = authorize;
