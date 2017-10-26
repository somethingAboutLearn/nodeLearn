var url = require('url')

var imooc = url.parse('http://www.imooc.com/video/6710/0')

console.log(imooc)
console.log(url.parse('http://www.imooc.com/video/6710/0'))
console.log(url.resolve('http://www.imooc.com/video/6710/0','?name=jialei'))