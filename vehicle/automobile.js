var bus = require('./bus')
var manu = require('./manufacturer')

function add(manuname, busname) {
    manu.add(manuname)
    busname.forEach(function (value, index) {
        bus.add(value)
    })
}

exports.add = add