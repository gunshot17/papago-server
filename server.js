const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const path = require("path");

const users = require("./route/users");


const app = express();

app.use(express.json());

app.use("/api/v1/users", users);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running`));