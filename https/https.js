var https = require('https')        //https是http基于TLS/SSL的版本
var fs = require('fs')

var options = {
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem')
}

// var options = {
//     pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
//     passphrase: 'sample'
// };

https.createServer(options, function (req, res) {
    res.writeHead(200)
    res.end("Hello Https")
})
.listen(1234)