var http = require('http')
var request = require('request')        //request模块(https://www.npmjs.com/package/request)

http
    .createServer(function (req, res) {
        request('http://nodejs.cn/static/images/logo.svg', function (error, res, body) {

        }).pipe(res)        //readable.pipe() 绑定一个 Writable 到 readable 上， 将可写流自动切换到 flowing 模式并将所有数据传给绑定的 Writable。数据流将被自动管理。这样，即使是可读流较快，目标可写流也不会超负荷（overwhelmed）。
    })
    .listen(8888)