const User = require("../model/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');


exports.register_user = asyncHandler(async(req, res) => {
    const {name, username, email, password} = req.body;
    bcrypt.hash(password, null, null, async function(err, hash) {
        // Store hash in your password DB.
        if(!err){
            const user = new User({
                name, 
                username, 
                email, 
                password: hash
            })

            await user.save()

            return res.send({
                status: 200,
                message: "Registration Successful"
            });
        } else {
            return res.send({
                status: 400,
                message: "An error occurred"
            })
        }
    });
})

exports.login_user = asyncHandler(async(req, res) => {
    const {accound_id, password} = req.body;

    let user
    
    user = await User.findOne({email: accound_id})

    if(!user) {
        user = await User.findOne({username: accound_id})
    }

    if(!user) {
        return res.send({
            status: 400,
            message: "Invalid username or password"
        })
    }

    bcrypt.compare(password, user.password, function(err, response) {
        if(err){
            return res.send({
                status: 400,
                message: err
            })
        }

        // res.send(user)

        if(response){
            // return res.send({status:200, user})
            const secretKey = process.env.SECRET_KEY
            jwt.sign({ user }, secretKey, function(err, token) {
                if(err){ 
                    return res.send({
                        status: 400,
                        message: err
                    })
                }
                return res.send({token});
            });
        } else {
            return res.send({
                status: 400,
                message: "Invalid username or password"
            })
        }
    });
})