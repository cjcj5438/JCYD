// 函子首先是一个范畴,可以理解成一个容器.里面
// 有值个变形关系,那什么情况下一个范畴可以叫为
// 函子呢?就是当前的范畴里面拥有的变形关系,不在仅仅
// 局限于当前范畴内的两个人员,而是这个变形关系能
// 作用于当前范畴所有的值,将当前容器变形成另一个
// 容器
var Container = function (x) {
    this.__value = x;
}
//函数式编程一般约定，函子有一个of方法
Container.of = x => new Container(x);
//Container.of(‘abcd’);
// 一般约定，函子的标志就是容器具有map方法。该方法将容器 里面的每一个值，映射到另一个容器。
Container.prototype.map = function (f) {
    return Container.of(f(this.__value))
}
Container.of(3)
    .map(x => x + 1)                             //=> Container(4)
    .map(x => console.log('Result is ' + x));    //=> Container('Result is 4')