const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
        username: {type: String, required: true, maxLength: 50},
        email: {type: String, required: true, maxLength: 50, unique:true},
        password: {type: String, required: true, unique:true},
        name: {type: String, required: true}
    },
)

const userModel = new mongoose.model("user", userSchema)

module.exports = userModel;