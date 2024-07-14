// import fs, { writeFile } from "fs"

// fs.appendFile("Hello.txt", "Hello Soumya",(err)=>{
//     if(err) console.error(err)
//     console.log("Done")
// })


import express from "express"
const App=express()
const port=3000

App.use((req, res, next)=>{
    console.log("this  is the home")
    next()
})


App.get("/",(req, res)=>{
    res.send("Hello this is my first express  js code")
})

App.get("/home",(req, res)=>{
    res.send("HEllo i am Home ")
})

App.get("/Hello",(req, res)=>{
    res.send("kjnfiwdnfiuwufiewfwjee fjwejnfewfw jwbdiuwed ")
})
App.get("/soumya",(req, res)=>{
    res.send("Hello my name is Brijesh ")
})
App.listen(port,()=>{
    console.log("this is the "+port)
})