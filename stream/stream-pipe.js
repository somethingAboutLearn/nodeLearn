var fs = require('fs')
var http = require('http')

http
    .createServer(function (req, res) {
        // fs.readFile('./img.jpg', function (error, data) {
        //     if (error) {
        //         console.log('读取异常：' + error)
        //     }
        //     res.writeHead(200, {'Context-Type': 'text/html'})
        //     res.end(data)
        // })

        fs.createReadStream('./img.jpg').pipe(res)
    })
    .listen(8888)