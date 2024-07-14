const express = require("express")
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")
const usermodel = require("./models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/create",  (req, res) => {
    let { name, email, age, password } = req.body

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let createdUser= await usermodel.create({
                name,
                email,
                age,
                password:hash
            })

            let token= jwt.sign({email:email}, "Nkjsndwkcnd")
            res.cookie("token", token)
            res.send(createdUser)

        })
    })

})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",(req,res)=>{
    let user= usermodel.findOne({email: req.body.email})
    if(!user){
        return res.send("Somthing went wrong")
    }

    bcrypt.compare(req.body.password, user.password, (err, result)=>{
        console.log(result)
    })
})

app.get("/logout",(req, res)=>{
    res.cookie("token", "")
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("server is listing on port no ", 3000)
})