//链式调用
var s={
    a:function (argument) {
        console.log('first');
        return this;
    },
    b:function (argument) {
        console.log('second');
        return this
    },
    c:function (argument) {
        console.log('three')
    }
};
s.a().b().c();