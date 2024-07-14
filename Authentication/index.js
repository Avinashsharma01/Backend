const cookieParser = require("cookie-parser")
const express = require("express")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const app = express()



app.use(cookieParser())

app.get("/", (req, res) => {
    res.cookie("Name", "Avinash Sharma")
    res.send("Done")
})


app.get("/hello", (req, res) => {
    res.send("Cookie yaha bhi hai ")
    console.log(req.cookies)
})


app.get("/pass", (req, res) => {         // here we are decrypt our password
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("Avinash@321", salt, function (err, hash) {
            // Store hash in your password DB.
            console.log(err, hash)
            res.send("Kaam done")
        });
    });
})


app.get("/check", () => {               // here we are checking our password 
    // Load hash from your password DB.
    bcrypt.compare("Avinash@321", "$2b$10$jgpGwDMSQIJERTpQV0fHk.8BqbnIfVxGq9ocvU25g3LLxoCriiBmS", function (err, result) {
        // result == true
        console.log(err, result)
        res.send("Kaam done")
    });
})


app.get("/token",(req,res)=>{
    const token=jwt.sign({name:"Avinash Sharma"}, "secretkey")
    res.cookie("Token", token)
    res.send("done")
})


app.get("/readtoken",(req, res)=>{
    console.log(req.cookies)
    res.send("Kaam done")
})


app.get("/verifydata",(req, res)=>{
    let data= jwt.verify(req.cookies, "secretkey")
    console.log(data)
})



app.listen(3000, () => {
    console.log("Server is running", 3000)
})