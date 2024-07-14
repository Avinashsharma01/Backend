const express = require("express")
const path = require("path")
const app=express()
const usermodel=require("./models/user")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs")



app.get("/",(req,res)=>{
    res.render("create")
})
app.get("/read", async (req,res)=>{
    let readUser= await usermodel.find()
    res.render("read",{users:readUser})
})


app.get("/edit/:userid", async (req,res)=>{
    let editUser= await usermodel.findOne({_id:req.params.userid})
    res.render("edit",{editUser})
})

app.post("/update/:userid", async (req,res)=>{
    let {image, email, name}=req.body
    let updateUser= await usermodel.findOneAndUpdate({_id:req.params.userid},{image, email, name}, {new:true})
    res.redirect("/read")
})


app.get("/delete/:id", async (req,res)=>{
    let deleteUser= await usermodel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})


app.post("/create", async (req,res)=>{
    let createdUser=  await usermodel.create({
        name:req.body.name,
        email:req.body.email,
        image:req.body.image
    })
    res.redirect("/read")
})


app.listen(4000, ()=>{
    console.log("Server is listing on port number"+ 4000)
})