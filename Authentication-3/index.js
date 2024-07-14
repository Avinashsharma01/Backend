const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const path = require("path")
const usermodel = require("./models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())





app.get("/", (req, res) => {
    res.render("Home")
})

app.get("/create", (req, res) => {
    res.render("index")
})

app.post("/create", (req, res) => {
    let { name, email, age, password } = req.body


    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await usermodel.create({
                name,
                email,
                age,
                password: hash
            })
            res.send(createdUser)
        })
    })


    let token = jwt.sign({ email: email }, "Soumya")
    res.cookie("token", token)

})

app.get("/profile", (req, res) => {
    res.render("profile")
})

app.get("/login", (req, res) => {
    res.render("login")
})


app.post("/login", async (req, res) => {
    let user = await usermodel.findOne({ email: req.body.email })
    if (!user) {
        return res.send("Somthing went wrong")
    }
    // console.log(user)
    // console.log(user.password, req.body.password)

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result === true) {
            let token = jwt.sign({ email: user.email }, "Soumya")
            res.cookie("token", token)
            res.redirect("/profile")
            
        } else {
            res.send("Somthing went wrong")
        }
    })

})


app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.redirect("/")
})

app.listen(3000)
