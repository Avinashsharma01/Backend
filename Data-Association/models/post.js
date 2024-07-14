const { name } = require("ejs")
const mongoose= require("mongoose")

const postSchema= mongoose.Schema({
    postdata:String,
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ],
    date:{
        type:Date,
        default: new Date
    }
})

module.exports= mongoose.model("post", postSchema)