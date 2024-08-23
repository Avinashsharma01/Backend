const mongoose= require("mongoose")

const hospitalSchema= new mongoose.Schema({
    name:{
        name:String,
        required:true
    },
    addressline1:{
        name:String,
        required:true
    },
    addressline2:{
        name:String,
        
    },
    city:{
        name:String,
        required:true
    },
    city:{
        name:Number,
        required:true
    },
    specilizedin:[
        {
            type:String
        }
    ],
    

}, {timestamps:true} )

const hospital= mongoose.model("hospital", hospitalSchema)