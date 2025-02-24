const express = require('express'); // express.js node module
const log = require('morgan'); // morgan.js node module
const http = require('http'); // http module

const app = express(); // create express app

app.use((req, res, next) => { // make a request, response and next function 
    const minute = new Date().getMinutes(); // creating a const that holds the minutes of the timestamp
    if (minute % 2 === 0) { 
        next(); // if the minute is even, move on to the next function
    } else { // otherwise 
        res.statusCode = 403; // set the status code to 403
        res.end('Not authorized.'); // end the response with the message 'Not authorized.'
    }
})

app.use((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"}); // create a call back handler req, status code 200, content plain text
    res.end("Hello World!!!!!!!") // end response 	
})

http.createServer(app).listen(3000) // create a local server on port 3000