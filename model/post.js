const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const postSchema = new Schema({
        title: {type: String, required: true},
        body: {type: String, required: true},
        slug: {type: String, required: true},
        comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
        status: {type: String, enum: ["published", "unpublished"], default: "unpublished"},
        author: {type: Schema.Types.ObjectId} 
    },
    {timestamps: true}
)

const postModel = new mongoose.model("Post", postSchema)

module.exports = postModel;