import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
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
  }
})


export const subtodo= mongoose.model("subtodo", subTodoSchema)