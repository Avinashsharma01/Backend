const express = require("express")
const usermodel = require("./usermodle")
const app = express()

app.get("/", (req, res) => {
    res.send("Server chal raha hai")
})




// How to create data in database???
app.get("/create", async (req, res) => {
    let createduser = await usermodel.create({
        name: "Avinash Sharma",
        username: "Avinash-HEllo",
        email: "AvinashSharma31384@gmail.com"
    })
    console.log("Created successefully")
    res.send(createduser)
})



// How to update the data in database??
app.get("/update", async (req, res) => {
    let updateduser = await usermodel.updateMany(        // findOneAndupdate,  updateOne,  updateMany
        {
            username: "Avinash-HEllo"
        },
        {
            name: "Hello World"
        },
        {
            new: true
        }
    )
    console.log("Created successefully")
    res.send(updateduser)
})


// How to read the data in database??
app.get("/read", async (req, res) => {
    let readuser = await usermodel.find()
    res.send(readuser)
})



// How to delete the data in database??
app.get("/delete", async (req, res) => {
    let deleteuser = await usermodel.findOneAndDelete({ username: "Avinash-HEllo" })   //findOneAndDelete, deleteOne , deleteMany
    res.send(deleteuser)
})




// How to delete the data in database??
app.get("/deleteall", async (req, res) => {
    let deleteManyuser = await usermodel.deleteMany()   //findOneAndDelete, deleteOne , deleteMany
    res.send(deleteManyuser)
})


app.listen(3000, () => {
    console.log("Server is listing omn port no", 3000)
})