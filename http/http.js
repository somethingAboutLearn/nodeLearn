var http = require('http')

http.createServer(function (req, res) {
    res.writeHead('Content-Type', 'text/plain')
    res.write('Hello Nodejs')
    res.end()
})
    .listen(1234)