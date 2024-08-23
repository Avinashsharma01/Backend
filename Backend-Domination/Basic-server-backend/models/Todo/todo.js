import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required: true,
  },
  complete:{
    type:Boolean,
    default: false,
  },
  createdby:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  subtodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'subtodo'
      
    }
  ]
})


export const todolist = mongoose.model("todo", todoSchema)