const db = require("./config-db");

const initDB = () => {
	// if you need to clean db :
	// dropTables(db);

	createTables(db);
};

const dropTables = (db) => {
	db.run("DROP TABLE if exists users");
	db.run("DROP TABLE if exists persons");
};

const createTables = (db) => {
	// create users table
	const sqlUsers =
		"CREATE TABLE if not exists users (id INTEGER PRIMARY KEY AUTOINCREMENT, email UNIQUE, password, name)";
	db.run(sqlUsers);

	// hydrate users table (psw = admin)
	const addAdmin =
		"INSERT INTO users (email, password, name) VALUES ('admin', '$2a$10$XEOPtzU0NWSpxEpj3oHyTuPFjQ41p03/B8LP88DFk4OHmeqlGXjN.', 'Admin Istrateur')";
	db.run(addAdmin, (err) => null);

	// create persons table
	const sqlPersons =
		"CREATE TABLE if not exists persons (id INTEGER PRIMARY KEY AUTOINCREMENT, nom, prenom, present)";
	db.run(sqlPersons);

	// check if any row already on persons table
	const getPersons = "SELECT * FROM persons";
	db.all(getPersons, [], (error, rows) => {
		if (error) return;

		const persons = [];
		rows.forEach((row) => {
			persons.push(row);
		});

		// if 0 row ...
		if (persons.length === 0) {
			// ... hydrate persons table
			const addPersons =
				"INSERT INTO persons (nom, prenom, present) VALUES ('Doe', 'John', 'true'), ('Doe', 'Jane', 'false')";
			db.run(addPersons, (err) => null);
		}
	});
};

module.exports = initDB;
