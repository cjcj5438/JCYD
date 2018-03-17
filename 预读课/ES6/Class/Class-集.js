/**
 * 表达式
 * 当我们要使用这个类的时候;这个类的名字是MyClass而不是Me
 */
// const MyClass=class Me{
//     getClassName(){
//         return Me.name;
//     }
// };
// // 所以一般这样写
// const MyClass=class{
//     //...
// };
// // 立即执行的类
// let person=new class{
//     constructor(name){
//         this.name=name;
//     }
//     sayName(){
//         console.log(this.name)
//     }
// }("ddd");
// person.sayName();

/**
 * 不存在变量提升
 */


/**
 * 私有方法和私有属性 这里有问题?
 * 利用Symbol值的唯一性，
 */
// const bar = Symbol("bar");
// const snaf=Symbol('snaf');
// export default class myClass{
//
//     // 公有方法
//     foo(baz) {
//         this[bar](baz);
//     }
//
//     // 私有方法
//     [bar](baz) {
//         return this[snaf] = baz;
//     }
//
// };

/**
 * this 指向
 * 推荐使用 钩子函数
 * 另一种解决方法是使用Proxy，获取方法的时候，自动绑定this。 后期学习完善
 */
// class Logger{
//     constructor() {
//         //方法一
//         this.printName = (name = 'there') => {
//             this.print(`Hello ${name}`);
//         };
//         //方法二
//         // this.printName = this.printName.bind(this);
//     }
//     printName(name='there'){
//         this.print(`hello ${name}`)
//     }
//     print(text){
//         console.log(text)
//     }
// }
// const logger=new Logger();
// const {printName}=logger; //这是方法解构
// printName();

/**
 * set 和 get 的关键字 & static
 * 见同文件下的 index.js 文件
 */

/**
 * new.target  new.target指向当前正在执行的函数;用来确定构造函数是怎么调用的。
 */
// class Shape {
//     constructor() {
//         if (new.target === Shape) {
//             throw new Error('本类不能实例化');
//         }
//     }
// }
//
// class Rectangle extends Shape {
//     constructor(length, width) {
//         super();
//         // ...
//     }
// }
//
// var x = new Shape();  // 报错
// var y = new Rectangle(3, 4);  // 正确
