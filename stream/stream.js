var fs = require('fs')

var source = fs.readFileSync('./img.jpg')

fs.writeFileSync('img-stream.png', source)