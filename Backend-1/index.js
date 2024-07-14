console.log("Avinash Sharma")
console.log('i am learning backend right now.')
require('dotenv').config()
const express=require('express')
const app=express()
const port=4000

app.get("/",(req, res)=>{
    res.send("Sab thi hai")
})

app.get("/avinash",(req, res)=>{
    res.send("<h1>Avinash sharma sab kuch thik thak ja raha hai chalte raho</h1>")
})

app.get("/data",(req,res)=>{
    res.send("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, dolores provident hic beatae reprehenderit fugiat dolorum ipsa sit laborum iusto.")
})

app.get('/youtube',(req,res)=>{
    res.send('hello Youtube ')
})

app.listen(process.env.port,()=>{
    console.log(`Listing on port no:-  ${port}`)
})