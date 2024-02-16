const express = require("express");
const authorize = require("../middlewares/authorize");
const { getPersons } = require("../controllers/persons/getPersons");
const { addPerson } = require("../controllers/persons/addPerson");
const { updatePerson } = require("../controllers/persons/updatePerson");
const { getPerson } = require("../controllers/persons/getPerson");
const { deletePerson } = require("../controllers/persons/deletePerson");

const router = express.Router();

router.route("/").get(getPersons).post(authorize, addPerson);
router
	.route("/:id")
	.get(getPerson)
	.delete(authorize, deletePerson)
	.patch(authorize, updatePerson);

module.exports = router;
