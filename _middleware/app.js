const express = require("express") // express module install required
const morgan = require("morgan") // morgan module intall required 

const app = express() // declear app instance

app.use((req, res , next) => { // requesting a response checking URL path
    if(req.url === "/") {
        next()
    } else if (req.url === "/throw") {
        throw new Error("wrong path!")
    } else {
        next("You did not visit the root!")
    }
})

app.use((req, res) => {
    res.send("Welcome to the home page")
})

app.use((err, req, res, next) => { // log error if there is a problem
    console.log("err")
    res.status(500)
    next(err)
})


app.use((err, req, res, next) => {
    res.send("Error Message: " + err)
})

app.listen(3000, () => {
    console.log("app started")
})