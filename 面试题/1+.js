// .请描述你理解的函数式编程，并书写如下代码结果。如何将函数式编程 应用到你的项目中呢？
var Container = function (x) {
    this.__value = x;
};
Container.of = x => new Container(x);
Container.prototype.map = function (f) {
    return Container.of(f(this.__value))
};
Container.of(3).map(x => x + 1).map(x => 'Result is ' + x);
