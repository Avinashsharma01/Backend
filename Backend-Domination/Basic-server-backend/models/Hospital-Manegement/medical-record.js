const mongoose= require("mongoose")

const medicalRecordSchema= new mongoose.Schema({
    
}, {timestamps:true} )

const medicalReport= mongoose.model("medecalReport", medicalRecordSchema)