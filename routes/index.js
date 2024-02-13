const express = require("express");
const router = express.Router();
const {published_posts_get, posts_post, single_posts_get, unpublished_posts_get, all_posts_get, posts_delete_all, posts_edit, posts_delete, posts_search} = require("../controller/postController");
const { verifyToken } = require("../utils/util");

router.get("/", published_posts_get)

router.get("/unpublished", verifyToken, unpublished_posts_get)

router.get("/all", verifyToken, all_posts_get)

router.post("/", verifyToken, posts_post)

router.get("/search", posts_search)

router.get("/:slug", single_posts_get)

router.put("/:postId", verifyToken, posts_edit);

router.delete("/:postId", verifyToken, posts_delete)

router.delete("/deleteall", verifyToken, posts_delete_all)

module.exports = router;