const express = require("express");
const auth = require("../middleware/auth");
const {
    uploadPosts,
    getMyPosts,
    updatePost,
    deletePost,
} = require("../controllers/posts");


const router = express.Router();

// api/v1/posts
router.route("/").post(auth, uploadPosts);
router.route("/me").get(auth, getMyPosts);
router.route("/:post_id").put(auth, updatePost).delete(auth, deletePost);

module.exports = router;