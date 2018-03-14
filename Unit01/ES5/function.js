(function () {
    var a=20;
    function a() {
        
    }
    console.log(a)
})()
    // 函数提升要高于变量
(function () {
    function a() {}
    var a;
    a=20;
    console.log(a)
})()


//立即执行函数
(function () {}());
(function () {})();
[function () {}()];

~function () {}();
!function () {}();
+function () {}();
-function () {}();

delete function () { }();
typeof function () { }();
void  function () { }();
new function () { }();
new function () { };

var f=function () { }();
1,function () { }();
1^function () { }();
1>function () { }();

//高阶函数  是把函数当作参数或者返回值是函数的    函数

// 回调函数
[1,2,3,4].forEach(function (item) {
    console.log(item)
})

// 闭包
// 函数嵌套.并对外提供访问;
function make() {}
// 酸辣秃头
// 来教炒肉
// 红烧paogui






















