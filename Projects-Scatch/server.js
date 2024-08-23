const express= require("express")
const cookieParser= require("cookie-parser")
const path= require("path")
const app= express()
const connection= require("./config/monggose-connnection")
const usersRouter= require("./routes/usersRouter")
const ownersRouter= require("./routes/ownersRouter")
const productsRouter= require("./routes/productsRouter")
const homeRouter= require("./routes/homeRouter")

const PORT= 3000


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// console.log(connection)


// express.Router
app.use("/", homeRouter)
app.use("/users", usersRouter)
app.use("/owners", ownersRouter)
app.use("/products", productsRouter)



app.listen(PORT, ()=>{
    console.log("Server is listenig on port no ", PORT)
})