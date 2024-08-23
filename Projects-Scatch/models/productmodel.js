const mongoose = require("mongoose")
const productschema = mongoose.Schema({
   image: String,
   name: String,
   price: Number,

   discount: {
      type: Number,
      default: 0
   },

   bgcolor: String,
   penelcolor: String,
   tectcolor: String,
})

module.exports = mongoose.model("product", productschema)