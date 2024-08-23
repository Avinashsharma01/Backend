const mongoose= require("mongoose")

const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diogonist:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    address:{
        type:Number,
        required:true,
    },
    BloodGroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["M", "F", "O"],
        required:true,
    },
    admitedin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospital'
    }
    
}, {timestamps:true} )

const patient= mongoose.model("patient", patientSchema)