const multer=require("multer")
const path = require("path")
const crypto= require("crypto")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image/upload')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        crypto.randomBytes(10, (err, bytes)=>{
            if(err){
                console.log(err)
            }else{
                let name= bytes.toString("hex")+path.extname(file.originalname)
                cb(null, name)
            }
        })
    }
  })
  
  const upload = multer({ storage: storage })


module.exports= upload








































// // First method to upload file 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/image/upload')
//     },
//     filename: function (req, file, cb) {
//     crypto.randomBytes(12, (err, bytes)=>{
//         console.log(bytes.toString("hex"))
//         console.log(file)
//         let fn = bytes.toString("hex") + path.extname(file.originalname)
//         cb(null, fn)
//     })
//     }
//   })
  
//   const upload = multer({ storage: storage })




// // Second method to upload file 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/image/upload')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)

//       cb(null, uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })
