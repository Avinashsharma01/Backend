const mongoose= require("mongoose")

//  *Defines the schema for an order item in a MongoDB database using Mongoose.
const orderItemSchema= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        required:true,
    }
}, {timestamps:true})




//  *Defines the schema for an address in the database.
const orderAddress= new mongoose.Schema({
    Country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
}, {timestamps:true})






//  *Represents the schema for an order in the database.
const orderSchema= new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    costomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:[orderAddress]
    }
}, {timestamps:true})

export const order= mongoose.model("order", orderSchema )