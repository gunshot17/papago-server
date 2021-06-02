const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const path = require("path");

const users = require("./route/users");
const naver_users = require("./route/naver_users");


const app = express();

app.use(express.json());

app.use("/api/v1/users", users);
app.use("/api/v1/naver_users", naver_users);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running`));