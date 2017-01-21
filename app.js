#!/usr/bin/env node

var express = require('express')
var http = require('http')
var reload = require('reload')
var app = express()
var expressHandlebars = require('express-handlebars')

// Configure Express App
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Configure routes to static assets
app.use('/style', express.static(__dirname + '/node_modules/bootstrap/dist/'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/css', express.static(__dirname + '/css/'))
app.use('/js', express.static(__dirname + '/js/'))

// Router Logic
app.get('/', function(req, res) {
    res.render('home')
})

function startServer(port) {
    var server = http.createServer(app)
    // TODO(Sarat): Don't use reload in prod environment
    reload(server, app)
    server.listen(port, function() {
        console.log('Server started, listening on port ' + port)
    })
}

startServer(3000)

