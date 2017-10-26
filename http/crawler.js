var http = require('http')      //加载http模块
var url = 'http://www.imooc.com/video/7965/0'       //要爬取的数据URL

http.get(url, function(res){        //发送get请求
    var html = ''

    res.on('data', function (data) {        //监听事件
        html +=data
    })

    res.on('end', function () {     //监听事件
        console.log(html)
    })
}).on('error', function () {        //监听事件
    console.log('获取出错')
})