//代码段一
if(!("userName" in window)){
    var userName= "zheng";
}
console.log(userName);
// 代码段2
var obj={
    user:'zhengzheng',
    getName:function () {
        return this.user;
    }
}
var getNameFn=obj.getName;
console.log(getNameFn)
console.log(getNameFn());//那不到user 的值的. 随意最后返回的是undefined
console.log(obj.getName());

//作用域
/**
 * 全局作用域
 * 函数作用域
 * 块级作用域
 */

// js 的作用域
var global=1;
function doSomething() {
    var inner=2;
    globalA=3;
}
doSomething();
console.log(global);
console.log(globalA);//函数作用域 内没有var声明   会直接挂到 window 上
console.log(inner); //外部不能访问到局部的作用域

// javascript 作用域链 >> 在js 中.函数也是对象, 函数对象和其它对象一样,拥有可以通过代码访问的属性和一系列仅供js
// 引擎访问的内部属性, 其中一个内部属性是[[scope]],由ECMA标准定义,该内部属性包含了函数被创建的作用域中对象的集合,
// 这个集合被称为函数作用域链.它决定了哪些数据能够被访问;


/**
 * this 的使用场景
    * 普通函数中
        * 严格模式 undefined
        * 非严格模式 全局对象(window)
    * 构造函数中: 对象的实例
    * 对象方法: 对象本身
 * 使用方法
 * fn.call()
 * fn.apply()
 * function (){}.bind()
 * 通过这三种方法可以改变被调用函数的中的this 指向的对象
 */


// 原型对象是什么?

//闭包是什么?
// 闭包什么都不是,闭包就是一个作用域, 就是一个函数
// 那我们什么时候要使用闭包来解决问题呢?
//     当一个function时 循环的i 不能被保存的时候
// 但是, 我们要在上面绑定一个事件






