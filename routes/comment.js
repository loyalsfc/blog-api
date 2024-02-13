const express = require("express");
const { comment_get, comment_post, comment_delete, post_comment_get } = require("../controller/commentController");
const { verifyToken } = require("../utils/util");

const router = express.Router()

router.get("/", comment_get)

router.get("/:postId", post_comment_get)

router.post("/:postId", comment_post)

router.delete("/delete/:commentId", verifyToken, comment_delete )

module.exports = router