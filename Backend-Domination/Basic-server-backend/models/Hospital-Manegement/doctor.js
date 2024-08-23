const mongoose= require("mongoose")



const doctoeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    experienceYear:{
        type:Number,
        default:0
    },
    workInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"hospital"
        }
    ]
}, {timestamps:true} )

const doctor= mongoose.model("doctor", doctoeSchema)