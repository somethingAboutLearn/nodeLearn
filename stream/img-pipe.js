var fs = require('fs')

fs.createReadStream('./img.jpg').pipe(fs.createWriteStream('img-pipe.png'))