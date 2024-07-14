const express=require("express")
const userModel= require("./models/user")
const postModel= require("./models/post")
const app= express()

app.get("/", (req, res)=>{
    res.send("Server is live ")
})

app.get("/create", async(req, res)=>{
    let createData= await userModel.create({
        username:'Avinash',
        age:'20',
        email:'Avinash@gmail.com'
    })
    res.send(createData)
})


app.get("/post", async(req, res)=>{
    let post= await postModel.create({
        postdata:"Avinash Sharma is learning the Kali linux",
        user:"6690139f77fc17496581741a"
    })
    let user= await userModel.findOne({_id:"6690139f77fc17496581741a"})
    user.post.push(post._id)
    await user.save()
    res.send({user, post})
})



app.listen(3000,()=>{
    console.log("server is listening on port no ", 3000)
})