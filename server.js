var express = require ("express")
var app = express()
var port = process.env.PORT||3000
var path = require ("path")
app.use(express.static("client/build"))

app.get("*",function (req,res){
    res.sendFile(path.join(__dirname,"client/build/index.html"))
})

app.listen(port)