function a() {
    var x = 1
    return function (y) {
        console.log(x+y)
    }
}

var result = a()
var re = result(2)