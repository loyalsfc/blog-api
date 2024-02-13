const Post = require("../model/post");
const asyncHandler = require("express-async-handler")

exports.published_posts_get = asyncHandler(async(req,res, next) => {
    console.log({token: req.token})
    const post = await Post.find({status: "published"}).exec()

    res.send(post)
})

exports.all_posts_get = asyncHandler(async(req,res, next) => {
    const post = await Post.find().exec()

    res.send(post)
})

exports.unpublished_posts_get = asyncHandler(async(req,res, next) => {
    const post = await Post.find({status: "unpublished"}).exec()

    res.send(post)
})

exports.posts_search = asyncHandler(async(req, res, next) => {
    const {query, comment} = req.query
    const searchString = new RegExp(query, 'i')
    let post
    if(comment == 1){
        post = await Post.find({title: searchString, status: "published"}).populate("comments")
    } else {
        post = await Post.find({title: searchString, status: "published"}, "title body slug status createdAt")
    }

    res.send(post)
})

exports.single_posts_get = asyncHandler(async(req,res, next) => {
    console.log({single_posts_get: req.query.comment})
    let post
    if(req.query.comment == 1){
        post = await Post.findOne({slug: req.params.slug}).populate("comments")
    } else {
        post = await Post.findOne({slug: req.params.slug}, "title body createdAt")
    }
    if(post){
        res.send(post)
    } else {
        res.send({
            status: 404,
            message: "Post Not Found"
        })
    }
})

const slug = title => title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase() + "-" + new Date().getTime();

exports.posts_post = asyncHandler(async(req,res, next) => {
    const {title, body, status} = req.body;
    const post = new Post({
        title,
        body,
        status,
        slug: slug(title)
    })

    await post.save()

    res.send(post)
})

exports.posts_edit = asyncHandler(async(req, res, next) => {
    const postId = req.params.postId
    await Post.findByIdAndUpdate(postId, req.body);

    res.send({
        status: 200,
        message: "Update successfull"
    })
})

exports.posts_delete = asyncHandler(async(req, res, next) => {
    const postId = req.params.postId
    await Post.findByIdAndDelete(postId, req.body);

    res.send({
        status: 200,
        message: "Delete successfull"
    })
})

exports.posts_delete_all = asyncHandler(async(req, res, next) => {
 
    await Post.deleteMany({})

    res.send({
        status: 200,
        message: "Delete successfull"
    })
})