const express= require("express")
const cookieParser= require("cookie-parser")
const path= require("path")
const app= express()
const connection= require("./config/monggose-connnection")

const PORT= 3000

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res)=>{
    res.send("Server is live")
})


app.listen(PORT, ()=>{
    console.log("Server is listenig on port no ", PORT)
})