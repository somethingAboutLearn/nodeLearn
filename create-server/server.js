var http = require('http')

http.createServer(function (req, res) {
    res.setHeader('Content-type', 'text/plain')
    res.end('Hello World')
})
    .listen(8888)

console.log('Server Start')
console.log('服务器开启')