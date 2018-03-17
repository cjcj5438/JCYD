var module=(function () {
    var n=5;
    function print() {
        console.log(n)
    }
    function add(x) {
        var q=x+n;
        console.log(q)
    }
    return {
        des:'这是一个模式',
        add:add
    }
})()

//然后其他文件引入后这么使用,很多公司是这样设计js模块的
module.add(3);