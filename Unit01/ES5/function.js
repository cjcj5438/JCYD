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
