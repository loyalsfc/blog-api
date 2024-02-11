const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {published_posts_get, posts_post, single_posts_get, unpublished_posts_get, all_posts_get, posts_delete_all, posts_edit, posts_delete, posts_search} = require("../controller/postController")

router.get("/", verifyToken, published_posts_get)

router.get("/unpublished", unpublished_posts_get)

router.get("/all", all_posts_get)

router.post("/", posts_post)

router.post("/search", posts_search)

router.get("/:postId", single_posts_get)

router.put("/:postId", posts_edit);

router.delete("/:postId", posts_delete)

router.delete("/deleteall", posts_delete_all)

function verifyToken(req, res, next){
    const token = req.headers.authorization;

    if(typeof token !== "undefined") {
        const bearerToken = req.headers.authorization.split(" ")[1];
        // req.token = bearerToken;
        const secretKey = process.env.SECRET_KEY
        jwt.verify(token, secretKey, function(err, decoded) {
            console.log(err)
            console.log(decoded) // bar
        });
        next();
    } else {
        res.sendStatus(403);
    }
}


module.exports = router;