(function () {
    var a=20;
    var b=c=a;
})()
alert(c)
//变量没有声明直接赋值的话,直接是全局变量

    //代码分解
(function () {
    var a=20;
    var b=20;
    c=20;
})()
alert(c)