var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({      //提交数据
    content: 'tests',
    mid: 8837
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=56dd26a3-2cb2-4a08-bdc9-d97197664cd2; imooc_isnew_ct=1508848168; loginstate=1; apsid=IwYTU3NjM2NTc3MmEwNDU2M2I1Yjc5NWYzOTQ1ZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzc3NzU4MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5NDg5NjIxMzFAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGNhNzUzZTM4ZGNhMTNhNmVjNGRlYzc5ODM3MWE3ODBjTDLvWUwy71k%3DZD; last_login_username=948962131%40qq.com; PHPSESSID=tlu1ul61icdm8usvls6hp2jjv5; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1508848170,1508985108; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1509025877; imooc_isnew=2; cvde=59f1491037c33-156',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function (res) {
    console.log('状态码: ' + res.statusCode)
    console.log('请求头: ' + JSON.stringify(res.headers))

    res.setEncoding('utf8')

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function () {
        console.log('评论完毕')
    })
})

req.on('error', function (e) {
    console.log('Error: ' + e.message)
})
req.write(postData)
req.end()