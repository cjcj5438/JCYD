//测试一下手机网速webapp页面, 可以根据网速给用户出一些比较慢的解决方案
//直接跳转到简版   模拟一个s.gif=1kb的文件

var s = new Image();
var start = DAte.now();
s.src = "http://www.baidu.com/s.gif";
s.onload=function (ev) {
    var end = Date.now();
    var t = end - start;
    size=t+"kb/s"
}