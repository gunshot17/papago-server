const express = require("express");
const {
    createNaverUser,
    loginUser,
    logout

} = require("../controllers/naver_users");

const router = express.Router();

// api/v1/naver_users
router.route("/").post(createNaverUser);
router.route("/login").post(loginUser);
router.route("/logout").delete(auth, logout);
module.exports = router;