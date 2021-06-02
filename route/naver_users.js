const express = require("express");
const {
    createUser,
    loginUser,
    logout

} = require("../controllers/users");

const router = express.Router();

// api/v1/naver_users
router.route("/").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").delete(auth, logout);
module.exports = router;