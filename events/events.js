const EventEmitter = require('events').EventEmitter

const myEmitter = new EventEmitter();


myEmitter.setMaxListeners(11)       //返回myEmitter可以挂载的最大监听事件数，该值可以通过 myEmitter.setMaxListeners(n) 设置或默认为 myEmitter.defaultMaxListeners，默认值为 10

myEmitter.on('sing', function () {      //添加 listener 函数到名为 eventName 的事件的监听器数组的末尾。 不会检查 function 是否已被添加。 多次调用并传入相同的 eventName 和 function 会导致 function 被添加与调用多次
    console.log('一')
})

myEmitter.on('sing', function () {
    console.log('二')
})

myEmitter.on('sing', function () {
    console.log('三')
})

myEmitter.on('sing', function () {
    console.log('四')
})

myEmitter.on('sing', function () {
    console.log('五')
})

myEmitter.on('sing', function () {
    console.log('，')
})

myEmitter.on('sing', function () {
    console.log('上')
})

myEmitter.on('sing', function () {
    console.log('山')
})

myEmitter.on('sing', function () {
    console.log('打')
})

myEmitter.on('sing', function () {
    console.log('老')
})

myEmitter.on('sing', function () {
    console.log('虎')
})

function overIt() {
    console.log('完')
}

myEmitter.on('over', overIt)

// myEmitter.removeListener('over',overIt)     //移除指定监听事件类型的事件，回调函数不能为匿名函数
// myEmitter.removeAllListeners('sing')        //移除指定监听事件类型的所有事件

myEmitter.emit('sing','over')      //按监听器的注册顺序，同步地调用每个注册指定事件类型的事件监听器，并传入提供的参数。如果事件有监听器，则返回 true，否则返回false

var isListenedSing = myEmitter.emit('sing')
var isListenedOver = myEmitter.emit('over')
var isListenedNull = myEmitter.emit('null')
console.log(isListenedSing,isListenedOver,isListenedNull)

var arr = myEmitter.listeners('sing')       //返回指定监听事件类型的事件监听器数组副本
console.log(arr)

var num = myEmitter.listenerCount('sing')       //返回指定监听事件类型的事件监听器数量
console.log(num)