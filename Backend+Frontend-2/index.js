import express from "express"
const app=express()
let port=process.env.PORT||4000

app.get("/",(req,res)=>{
    res.send("All good")
})

app.get("/avinash",(req,res)=>{
    res.send("Avinash all is good")
})

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})