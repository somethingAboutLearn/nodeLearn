var i = 0

function printIt() {
    console.log(i)
}

function fun() {
    setTimeout(function () {
        i++
        printIt()
    }, 1000)
}

fun()