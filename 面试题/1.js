// 1.请写出弹出值，并解释为什么
+function () {
    alert(a);
    a();
    var a = function () {
        console.log(1)
    }

    function a() {
        console.log(2)
    }

    alert(a)  //function () {console.log(1)}
    a();
    var c = d = a;
}();
alert(d)
alert(c)