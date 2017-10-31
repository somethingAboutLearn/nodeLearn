var https = require('https')        //加载https模块
var cheerio = require('cheerio')        //加载第三方npm包--cheerio模块，用法类似于Jquery
var url = 'https://y.qq.com/n/yqq/singer/000rbz4D2yROaH.html#stat=y_new.album.header.singername'        //要爬取的网站URL

function fiterSong(html) {
    var $ = cheerio.load(html)

    //var songList = [{songName: '一半',songAlbum: '蒙面猜猜猜', songTime: '04:09'},{},{}]     //期望爬取数据的格式

    var songList = []

    var songList_item = $('.songlist__item')
    songList_item.each(function (item) {
        var that = $(this)
        var songNumber = that.find('.songlist__number').text()      //歌曲序号
        var songName = that.find('.songlist__songname_txt a').text()        //歌曲
        var songAlbum = that.find('.songlist__album a').text()      //专辑
        var songTime = that.find('.songlist__time').text()      //时长

        songList.push({
            songNumber: songNumber,
            songName: songName,
            songAlbum: songAlbum,
            songTime: songTime
        })
    })
    return songList
}

//输出
function printIt(songList){
    var songList = songList
    songList.forEach(function (value,index) {
        console.log(value.songNumber+value.songName+value.songAlbum+value.songTime)
    })
}

https.get(url, function (res) {     //http发送get请求
    var html = ''

    res.on('data', function (data) {
        html += data
    })

    res.on('end', function () {
        var songList = fiterSong(html)
        printIt(songList)
    })
}).on('error', function () {
    console.log('获取异常!')
})