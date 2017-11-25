# nodeLearning


nodejs API学习



* git 上传文件过大，需要设置 http.postBuffer
    
    `git config --global http.postBuffer 524288000`

* Buffer.alloc(size[,fill[,encoding]])
    * size 新建的 Buffer 期望的长度
    * fill 用来填充 Buffer 的值，默认： 0
    * encoding 如果fill是字符串，则该值就是它的字符编码，默认： 'utf8'
* Buffer.allocUnsafe(size)
    * size 新建的 Buffer 的期望长度
* Buffer.byteLength(string[,encoding])
    * string 要计算长度的值
    * encoding 如果 string 是字符串，则这是它的字符编码，默认： 'utf8'
* Buffer.compare(buf1, buf2)
    比较 buf1 与 buf2 的大小
    * 返回 -1     buf1 小于 buf2
    * 返回 0      buf1 等于 buf2   
    * 返回 1      buf1 大于 buf2
* Buffer.concat(list[,totalLength])
    合并
    * list 要合并的数组
    * totalLength 期望合并后的长度
* Buffer.isBuffer(obj)
    如果 obj 是一个 Buffer 则返回 true ，否则返回 false 
* Buffer.isEncoding(encoding)
    如果 encoding 是一个支持的字符编码返回 true ，否则返回 false
