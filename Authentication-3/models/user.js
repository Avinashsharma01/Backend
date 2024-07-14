const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Avinash")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    password:String
})

module.exports= mongoose.model("Soumya2", userschema)