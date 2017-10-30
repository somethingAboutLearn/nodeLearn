var https = require('https')        //加载https模块
var cheerio = require('cheerio')        //加载第三方npm包--cheerio模块(https://www.npmjs.com/package/cheerio)，用法类似于Jquery
var songSheetId = ['2686494616', '2978452862', '3282600917', '3264090856', '743502566']
var startUrl = 'https://y.qq.com/n/yqq/playlist/'
var endUrl = '.html#stat=y_new.index.playlist.pic'        //要爬取的网站URL

function getDataAsync(url) {
    return new Promise(function (resolve, reject) {
        console.log('正在爬取' + url)
        https.get(url, function (res) {     //http发送get请求
            var html = ''

            res.on('data', function (data) {
                html += data
            })

            res.on('end', function () {
                resolve(html)
            })

        }).on('error', function (e) {
            reject(e)
        })
    })
}

//提取信息
function fiterSong(html) {
    var $ = cheerio.load(html)
    var $songSheets = $('.mod_data')
    var $info = $songSheets.find('.data__info')
    var songList = []
    var $songList = $('.songlist__list li')

    $songList.each(function (item) {
        var that = $(this)
        var obj = {
            '序号': that.find('.songlist__number').text(),
            '歌曲': that.find('.songlist__songname .songlist__songname_txt a').text(),
            '歌手': that.find('.songlist__artist a').text(),
            '专辑': that.find('.songlist__album a').text(),
            '时长': that.find('.songlist__time').text()
        }
        songList.push(obj)
    })

    var songSheet = {
        '歌单名': $songSheets.find('.data__name_txt').text(),
        '作者': $songSheets.find('.data__singer a').text(),
        '歌曲': songList
    }

    return songSheet
}

//打印
function parintIt(data) {
    data.forEach(function (value, index) {
        console.log(`歌单： 《${value['歌单名']}》`)
        console.log(`作者： ${value['作者']}`)
        console.log(`歌曲： `)
        console.log(`序号     歌曲          歌手      专辑     时长`)
        value['歌曲'].forEach(function (value, index) {
            console.log(`${value['序号']}     ${value['歌曲']}     ${value['歌手']}     ${value['专辑']}     ${value['时长']}`)
        })
    })
}

var promiseGetArray = []        //异步爬取Promise数组

songSheetId.forEach(function (id) {
    var url = startUrl + id + endUrl
    promiseGetArray.push(getDataAsync(url))
})
Promise
    .all(promiseGetArray)
    .then(function (pages) {
        var songSheetData = []

        pages.forEach(function (html) {
            var data = fiterSong(html)

            songSheetData.push(data)
        })
        parintIt(songSheetData)
    })