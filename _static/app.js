const expres = require('express')
const path = required('path')
const http = require('http')

const app = express()

const publicPath = path.resolve(__dirname, 'assets')
app.use(express.static(publicPath))

app.use((req, res) => {
    res.writeHead(404, {"Content-type": "text/plain"})
    res.end("file not found")
})

http.createServer(app).listen(3000)

function greeting(){
    console.log("Hello")
}