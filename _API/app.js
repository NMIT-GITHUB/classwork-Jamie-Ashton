const express = require("express"); // express node 

const app = express(); // declearing express app

app.get("/random/:min/:max", (req, res) => {
    const min = parseInt(req.params.min)
    const max = parseInt(req.params.max)

    if(isNaN(min) || isNaN(max)) { // checking input is a number
        res.status(400)
        res.json({error: "bad request."}) // 
        return
    }

    const result = Math.round(Math.random() * (max-min) + min)

    res.json({result: result})
})


app.listen(3000, () => {
    console.log("app started on port 3000")
})

