const mongoose= require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/miniProject")

let userSchema= mongoose.Schema({
    name:String,
    username:String,
    age:String,
    email:String,
    password:String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]

})

module.exports= mongoose.model("user", userSchema)