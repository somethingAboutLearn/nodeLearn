$(document).ready(function () {
    //
    let div = $('.div')
    div.click(function () {
        $(this).siblings().toggle();
    })
    //
    $('<li>兰博基尼</li>').appendTo($('ul'))
})