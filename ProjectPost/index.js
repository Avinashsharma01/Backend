// Import required modules
const express = require("express")
const userModel = require("./models/user")
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Initialize express app
const app = express()

// Middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.set("view engine", "ejs")

// Middleware to check if user is logged in
function isLoggedIN(req, res, next) {
    if (req.cookies.token === "") {
        res.redirect("/login")
    } else {
        let data = jwt.verify(req.cookies.token, "Avinash")
        console.log(data)
        req.user = data
        next()
    }
}

// Route to render home page
app.get("/", (req, res) => {
    res.render("home")
})

// Route to render registration page
app.get("/register", (req, res) => {
    res.render("register")
})

// Route to render profile page, only accessible if logged in
app.get("/profile", isLoggedIN, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate("posts")
    res.render("profile", { user })
})

// Route to like/unlike a post, only accessible if logged in
app.get("/like/:id", isLoggedIN, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")

    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid)
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1)
    }

    await post.save()
    res.redirect("/profile")
})

// Route to render edit post page, only accessible if logged in
app.get("/edit/:id", isLoggedIN, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")
    res.render("edit", { post })
})

// Route to update a post, only accessible if logged in
app.post("/update/:id", isLoggedIN, async (req, res) => {
    let post = await postModel.findOneAndUpdate({ _id: req.params.id }, { postContent: req.body.postContent })
    res.redirect("/profile")
})

// Route to delete a post, only accessible if logged in
app.get("/delete/:id", isLoggedIN, async (req, res) => {
    let post = await postModel.findOneAndDelete({ _id: req.params.id })
    res.redirect("/profile")
})

// Route to create a new post, only accessible if logged in
app.post("/post", isLoggedIN, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    let { postContent } = req.body
    let post = await postModel.create({
        user: user._id,
        postContent
    })
    user.posts.push(post._id)
    await user.save()
    res.redirect("/profile")
})

// Route to handle user registration
app.post("/register", async (req, res) => {
    let { name, username, password, email, age } = req.body
    let user = await userModel.findOne({ email })
    if (user) {
        return (
            res.status(500).render("userExist")
        )
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = await userModel.create({
                    name,
                    username,
                    age,
                    email,
                    password: hash
                })
                let token = jwt.sign({ email: email }, "Avinash")
                res.cookie("token", token)
                res.redirect("/login")
            })
        })
    }
})

// Route to handle user login
app.post("/login", async (req, res) => {
    let { password, email } = req.body
    let user = await userModel.findOne({ email })
    if (!user) {
        return (
            res.status(500).render("noUser")
        )
    } else {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ email: email, userid: user._id }, "Avinash")
                res.cookie("token", token)
                res.status(200).redirect("/profile")
            } else {
                res.status(500).send("Password is incorrect")
            }
        })
    }
})

// Route to render login page
app.get("/login", (req, res) => {
    res.render("login")
})

// Route to handle user logout
app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.redirect("/login")
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log(`server is running on port no:- ${3000}`);
})