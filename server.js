const express = require("express");

const server = express();
server.use(express.json());

const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

server.get("/", (req, res) => {
	res.status(200).json({ api: "running" });
});

server.listen(8000, () => console.log("Running on port 8000"));
