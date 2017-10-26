function fun(str) {
    console.log(str)
}

function callbackit(callback, str) {
    callback(str)
}

callbackit(fun, 'Nodejs')

callbackit(function (str) {
    console.log(str)
}, 'Vue')