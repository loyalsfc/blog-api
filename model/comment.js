const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
        name: {type: String, required: true, maxLength: 50},
        text: {type: String, required: true, maxLength: 500},
        postId: {type: mongoose.Schema.Types.ObjectId, ref: "Post"}
    },
    {timestamps: true}
)

const commentModel = new mongoose.model("Comment", CommentSchema)

module.exports = commentModel;