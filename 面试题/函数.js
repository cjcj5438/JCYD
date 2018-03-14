//考点
//1
function make(num) {
    return function () {
        return num;
    }
}
var arr=[make(0),make(1),make(2)];
console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
//2
var name='global';
function A(name) {
    alert(name);
    this.name=name;
    var name='1';
}
A.prototype.name='2';
var a=new A('3');
alert(a.name);
delete a.name;
alert(a.name);



//3
function fun(n, o) {
    console.log(o);
    return {
        fun:function (m) {
            return fun(m, n);
        }
    }
}

var a = fun(0);
a.fun(1);a.fun(2);
var b=fun(0).fun(1).fun(2).fun(3);

var c=fun(0).fun(1);
c.fun(2);c.fun(3);

//4
function test(){
    return
    {
        a:1
    }
}
var f=test();
console.log(f.a)

//5
(function () { alert(1)})()
(function () { alert(2)})()
