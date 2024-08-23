const express = require("express")
const router= express.Router()
const ownerModel= require("../models/ownerModel")

router.get("/", (req, res)=>{
    res.send("i am owners")
})

router.get("/create", (req, res)=>{
    res.render("create")
})

router.get("/create", async (req, res)=>{
    let { username, email, password}= req.body
    let owner= await  ownerModel.create({
        name:"Avinash"
    })
    let createdowner= await owner.save()
    res.send(createdowner)
})

module.exports= router