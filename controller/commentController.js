const Comment = require("../model/comment");
const Post = require("../model/post")
const asyncHandler = require('express-async-handler');

exports.comment_get = asyncHandler(async(req, res) => {
    const comments = await Comment.find().exec({})

    res.send(comments)
})

exports.post_comment_get = asyncHandler(async(req, res) => {
    console.log("I'm here")
    const comments = await Comment.find({postId: req.params.postId}).exec({})

    res.send(comments)
})

exports.comment_post = asyncHandler(async(req, res) => {
    const {name, text} = req.body;
    const postId = req.params.postId
    const comment = new Comment({
        name,
        text,
        postId
    })

    await comment.save()

    const post = await Post.findById(postId);

    post.comments.push(comment._id)

    await post.save();
    

    res.send(comment)
})

exports.comment_delete = asyncHandler(async(req, res) => {
    const commentId = req.params.commentId
    const comment = await Comment.findById(commentId);
    const post = await Post.findById(comment.postId)
    post.comments = post.comments.filter(item => item != commentId)

    Promise.all([await post.save(), await Comment.findByIdAndDelete(commentId)])

    res.send({
        status: 200,
        message: "Comment delete successfully"
    })
})