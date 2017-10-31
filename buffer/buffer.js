// var buffer = require('buffer')
//
// var jiaLei1 = new Buffer("JiaLei")      //默认解析为 utf-8
// var jiaLei2 = new Buffer("JiaLei","base64")
// var jiaLei3 = new Buffer("贾磊")
// var jiaLei4 = new Buffer("贾磊","base64")
// var jiaLei5 = new Buffer(['j','i','a','L','e','i'])
// var jiaLei6 = new Buffer([1,2,3,4,5,6,7,8,9])
// var jiaLei7 = new Buffer([1.1,2.2,.3,4.4,5.5,6.6,7.7,8.8,.9])
//
// var buf1 = new Buffer(5)
// var buf2 = buf1.write('123456789')      //写入字符串，返回写入的字节数
// var buf3 = buf2.toString()
// var buf4 = jiaLei1.toString('ascii')        //解码为指定编码的字符串
// var buf5 = jiaLei1.toString('base64')
// var buf6 = jiaLei1.copy(jiaLei3)        //返回指定复制buffer对象的字节数
// var buf7 = jiaLei1.copy(jiaLei3,2,4)        //返回指定复制buffer对象的字节数
// var buf8 = jiaLei1.slice(2,4)       //截取
//
// console.log(buf1)
// console.log(buf2)
// console.log(buf1.length)
// console.log(buf3)
//
// console.log('----------分割线-------------')
// console.log(jiaLei1)
// console.log(buf4)
// console.log(buf5)
// console.log(buf6)
// console.log(buf7)
// console.log(buf8)
//
// console.log('----------分割线-------------')
// console.log(jiaLei1)
// console.log(jiaLei2)
// console.log(jiaLei3)
// console.log(jiaLei4)
// console.log(jiaLei5)
// console.log(jiaLei6)
// console.log(jiaLei7)
//
// console.log('----------分隔符-------------')
// console.log(jiaLei1.compare(jiaLei3))      //buf.compare(otherBuffer)比较当前缓冲区和另一个缓冲区的大小，相等返回0，小于返回-1，大于返回1。
// console.log(jiaLei1.compare(jiaLei1))      //buf.compare(otherBuffer)比较当前缓冲区和另一个缓冲区的大小，相等返回0，小于返回-1，大于返回1。
// console.log(jiaLei3.compare(jiaLei1))      //buf.compare(otherBuffer)比较当前缓冲区和另一个缓冲区的大小，相等返回0，小于返回-1，大于返回1。
//
// console.log('----------分隔符-------------')
// console.log(jiaLei1.equals(jiaLei1))        //如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。
// console.log(jiaLei1.equals(jiaLei3))
//
// console.log('----------分隔符-------------')
// console.log(jiaLei1)
// console.log(jiaLei1.fill('无邪',6))


// var buf = new Buffer('贾磊')
// var str = buf.toString('base64')
// console.log(str)
// console.log('---------分隔符------------')
//
// var buf = new Buffer('6LS+56OK', 'base64')
// var str = buf.toString()       //默认转换为编码风格为utf8的字符串
// console.log(str)
// console.log('---------分隔符------------')
//
// var buf = new Buffer('贾磊')
// var str = buf.toString('hex')
// console.log(str)
// console.log('---------分隔符------------')
//
// var buf = new Buffer('e8b4bee7a38a', 'hex')
// var str = buf.toString()
// console.log(str)
// console.log('---------分隔符------------')

//输出
// 6LS+56OK
// ---------分隔符------------
//     贾磊
// ---------分隔符------------
//     e8b4bee7a38a
// ---------分隔符------------
//     贾磊
// ---------分隔符------------


var fs = require('fs')

//读取文件数据
fs.readFile('./img.jpg', function (error, data) {
    if (error) {
        throw error
    }

    //向文件中写入数据
    fs.writeFile('./img-write.png', data, function (error) {
        if (error) {
            throw error
        }

        console.log('This file copyed!')
    })

    if (Buffer.isBuffer(data)) {
        console.log('fs.readFile读取的数据是Buffer类型')
    } else {
        console.log('fs.readFile读取的数据不是Buffer类型')
    }

    var base64Img = data.toString('base64')
    var writeData = new Buffer(base64Img, 'base64')

    fs.writeFile('./img-base64.png', writeData, function (error) {
        if (error) {
            throw error
        }

        console.log('This writed!')
    })
})