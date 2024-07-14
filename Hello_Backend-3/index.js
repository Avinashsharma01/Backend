// import path from "path";
// import express from "express"
const path = require("path")
const express= require("express")
const fs= require("fs")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")



app.get("/home", (req, res)=>{
    res.send("sab thik hai")
})


app.get("/", (req, res)=>{
    fs.readdir("./file",(err,file)=>{
        console.log(file)
        res.render("index",{file:file})
    })
})


app.get("/file/:filename", (req, res)=>{
    fs.readFile(`./file/${req.params.filename}`, "utf-8", (err, filedata)=>{
        console.log(filedata)
        res.render("Text", {filename:req.params.filename, filedata})
    })
})


// (path.join(__dirname, "file", `${req.body.heading}.txt`)
app.post("/create", (req, res)=>{
    console.log(req.body)
    fs.writeFile(path.join(__dirname, "file", `${req.body.heading}.txt`), req.body.text, ()=>{
        res.redirect("/")
    })
})


app.listen(3000,()=>{
    console.log(`server is listing on portno:- ${3000}`)
})