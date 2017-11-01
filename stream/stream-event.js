var fs = require('fs')

var readStream = fs.createReadStream('./vudio.avi')     //创建一个 ReadStream（可读流）对象，不同于在一个可读流上设置的 highWaterMark 默认值（16 kb），该方法在相同参数下返回的流具有 64 kb 的默认值
var writeStream = fs.createWriteStream('./vudio-copy.avi')      //创建一个 WriteStream （可写流）对象
var n = 0

readStream.on('data', function (chunk) {        //监听 data 事件，有数据读取就触发事件。chunk 是每一次读取的数据块。
    if (writeStream.write(chunk) === false) {       // WriteStream 有 write() 和 end() 方法
        readStream.pause()      // ReadStream 对象有 pause() 和 resume() 方法
        console.log('Waiting...')
    }
    n++
})

readStream.on('end', function () {      //监听 end 事件，当文件读取完毕后触发事件
    writeStream.end()
    console.log(n)
})

readStream.on('error', function (error) {
    console.log('异常：' + error)
})

writeStream.on('drain', function () {       //可写流的事件 clone 事件将在流（文件关闭时）触发事件；
    readStream.resume()                     // drain 如果调用 WriteStream.write() 方法返回 false 时，流将在适当的时机触发“drain”事件，这时才能继续向流中写入数据；
    console.log('Continue...')              // error 写入数据出错或使用管道出错时触发事件，回调函数仅会接受一个 Error 参数
})                                          // finish 在调用了 stream.end() 方法后，且缓存区的数据都传给底层系统后触发事件
                                            // pipe 在可读流上调用 stream.pipe() 方法，并在目标流向中添加当前可写流时触发事件
                                            // unpipe 在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除 Writable 时触发事件