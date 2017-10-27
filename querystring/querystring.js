const querystring = require('querystring')

//对给定的字符串进行 URL 编码
var str1 = querystring.escape('字符串')
var str2 = querystring.escape('string')

//对给定的字符串进行解码
var str3 = querystring.unescape(str1)
var str4 = querystring.unescape(str2)

//序列化，将传入的对象序列化输出。
var str5 = querystring.stringify({name: ['JiaLe1', 'WuXie'], sex: 'man'})
var str6 = querystring.stringify({name: 'JiaLe1', sex: 'man'},',',':')      //(obj, 键值对间的连接符(默认为&), 键与值间的连接符(默认为=))

//反序列化，把一个给定的 URL 字符串解析成一个键值对的集合
var str7 = querystring.parse(str5)
var str8 = querystring.parse(str6)

var str9 = querystring.parse('name=JiaLe1|name=WuXie|sex=man','|')

console.log(str1)       //%E5%AD%97%E7%AC%A6%E4%B8%B2
console.log(str2)       //string
console.log(str3)       //字符串
console.log(str4)       //string
console.log(str5)       //name=JiaLe1&name=WuXie&sex=man
console.log(str6)       //name:JiaLe1,sex:man
console.log(str7)       //{ name: [ 'JiaLe1', 'WuXie' ], sex: 'man' }
console.log(str8)       //{ 'name:JiaLe1,sex:man': '' }
console.log(str9)       //{ name: [ 'JiaLe1', 'WuXie' ], sex: 'man' }