var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

function startServer(port) {
    app.listen(3000, function() {
        console.log('Server started, listening on port ' + port)
    })
}

startServer(3000)

