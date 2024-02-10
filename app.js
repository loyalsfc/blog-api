const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
dotenv.config()

const app = express();

main().catch(err => console.log(err))

async function main(){
    mongoose.connect(process.env.MONGO_DB, {dbName: "blog"})
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const post = require("./routes/index")
const comment = require("./routes/comment")

app.use('/post', post);
app.use("/comment", comment);

app.listen(5000, ()=> {
    console.log(`App start running on port 5000`)
})