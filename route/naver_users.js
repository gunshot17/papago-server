const express = require("express");
const {
    createNaverUser,


} = require("../controllers/naver_users");

const router = express.Router();

// api/v1/naver_users
router.route("/").post(createNaverUser);

module.exports = router;