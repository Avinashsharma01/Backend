const express = require("express")
const app = express()
// const cors= require("cors")
// app.use(cors())


 
let hello = (req, res) => {
    res.send("server is live")
}

app.get("/", hello)

app.get("/home", (req, res) => {
    res.send("i am home ")
})

app.get("/api/joke", (req, res) => {
    let joke = [
        {
            id: 0,
            title: 'Hello-0',
            content: 'Hello i am joke-0'
        },
        {
            id: 1,
            title: 'Hello-1',
            content: 'Hello i am joke-1'
        },
        {
            id: 2,
            title: 'Hello-2',
            content: 'Hello i am joke-2'
        },
        {
            id: 3,
            title: 'Hello-3',
            content: 'Hello i am joke-3'
        },
        {
            id: 4,
            title: 'Hello-4',
            content: 'Hello i am joke-4'
        },
        {
            id: 5,
            title: 'Hello-5',
            content: 'Hello i am joke-5'
        },
    ]
    res.json(joke)
})



app.listen(3000)