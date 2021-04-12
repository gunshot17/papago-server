const express = require("express");
const dotenv = require("dotenv");



dotenv.config({ path: "./config/config.env" });

const users = require("./route/users");

const path = require("path");

const app = express();

app.use(express.json());

app.use("/api/v1/users", users);

const PORT = process.env.PORT;

app.listen(
    PORT,
    console.log(`Server running `)
);