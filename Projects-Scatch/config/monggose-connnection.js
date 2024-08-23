const mongoose= require("mongoose")


// try {
//     mongoose.connect("mongodb://127.0.0.1:27017/scatch")
// } catch (error) {
//     console.log(error)
// }


mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(()=>{
    console.log("Connected")
})
.catch((error)=>{
    console.log(error)
})

module.exports= mongoose.connection 