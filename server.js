const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/plan", (req, res) => {
    const plan = req.body.package
    res.redirect("/?plan=" + plan)
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
