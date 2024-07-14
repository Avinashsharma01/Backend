import express from "express"
const App=express()

App.use(express.json())
App.use(express.urlencoded({extended:true}))
App.set("view engine", "ejs")

App.get("/",(req,res)=>{
    res.render("index")
})
App.get("/profiles/:username",(req,res)=>{
    res.send(req.params.username)
})
App.get("/profiles/:username/:age",(req,res)=>{
    res.send(`Welcome ${req.params.username} your age is ${req.params.age} `)
})

App.listen(3000,()=>{
    console.log("Server listen kar raha hai")
})