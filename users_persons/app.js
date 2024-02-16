const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const initDB = require("./utils/init-db");
const authRouter = require("./routes/auth");
const peronsRouter = require("./routes/persons");
const badRouteHandler = require("./middlewares/badRouteHandler");
const errorHandler = require("./middlewares/errorHandler");

/* INIT APP */
const app = express();

// INIT DB //
initDB();

/* MIDDLEWARES */
app.use("/public", express.static("public"));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRouter);
app.use("/api/personnes", peronsRouter);
app.use("*", badRouteHandler);

app.use(errorHandler);

// OPEN SERVEUR //
const port = process.env.PORT || 4000;
app.listen(port, console.log(`Server is listening port ${port} ...`));
