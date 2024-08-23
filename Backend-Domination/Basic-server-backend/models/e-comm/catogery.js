const mongoose= require("mongoose")

const categorySchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps:true})


export const cetogery= mongoose.model("cetegory",categorySchema )