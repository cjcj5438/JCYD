/**
 * 基本格式
 *  如果参数都一样,同时和父类的方法一样,,可以不用加 constructor
 *  如果不一样的话. 子类必须在 constructor 中调用super 方法,否则新建的实例就会
     *  报错,这是应为子类没有自己的this 对象, 而是继承父类的this对象,然后进行加工,如果不调
     *  super方法,子类就找不到this对象.
 *
 *  父类的静态方法也会被子类继承
 */
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         // this.color = color; // ReferenceError
//         super(x, y);// 调用父类的constructor(x, y)
//         this.color = color; // 正确
//     }
//
//     toString() {
//         return this.color + ' ' + super.toString();// 调用父类的toString()
//     }
// }
// let cp = new ColorPoint(25, 8, 'green');
// cp instanceof ColorPoint // true
// cp instanceof Point // true

/**
 * Object.getPrototypeOf()
 * 可以用来从子类上获取父类
 * 因此,可以使用这个方法判断, 一个类是否继承了另一个类
 */
// console.log(Object.getPrototypeOf(ColorPoint) === Point)


/**
 * super  关键字
 * 有两种情况 用法完全不一样
 *      1,当做函数 : super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
 *      2,当作对象
 */
// // 1,当做函数
// class A {
//     constructor() {
//         console.log(new.target.name);
//     }
// }
// class B extends A {
//     constructor() {
//         super();//看返回的值是谁? 这里的this 就指向谁
//     }
// }
// new A() // A
// new B() // B
//
// //  2,当作对象
// class A {
//     constructor() {
//         this.q = 2;
//         this.z = 1;
//     }
//     p() {
//         return 2;
//     }
//     static myMethod(msg) {  //static 所有加了这个关键字的,属性都是挂在对象上的. 而不是挂在父类原型对象上的
//         console.log('static', msg);
//     }
//     myMethod(msg) {
//         console.log('instance', msg);
//     }
// }
// A.prototype.w= 2;
//
// class B extends A {
//     constructor() {
//         super();
//         //这时,super 就指向 A.prototype;
//         console.log(super.p()); // 2
//         console.log(super.q); // undefined
//         console.log(super.w); // 2
//         console.log(this.q); // 2
//         super.z = 3;//super.x赋值为3，这时等同于对this.z赋值为3。而当读取super.x的时候，读的是A.prototype.z，所以返回undefined。
//         console.log( super.z)// undefined.
//     }
//
//     //如果super作为对象在静态方法中,指向父类; 在普通方法中指向父类原型对象
//     myMethod(msg) {
//         super.myMethod(msg);
//     }
//     static myMethod(msg) {
//         super.myMethod(msg);
//     }
//
// }
//
// let b = new B();
// //这里区别是 没有实例之前是使用static方法 .实例之后,不使用静态方法了
// B.myMethod(1);//static 1
// b.myMethod(2);//instance 2

/**
 * 类的 prototype 属性和__proto__属性
 * 同时存在两条继承链。

 （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

<<<<<<< Updated upstream
 （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的
 */
// class A {
// }
//
// class B extends A {
// }
//
// B.__proto__ === A // true
// B.prototype.__proto__ === A.prototype // true
//
//
// //用Object.setPrototypeOf方法的实现继承
// class A {
// }
//
// class B {
// }
//
// // B 的实例继承 A 的实例
// Object.setPrototypeOf(B.prototype, A.prototype);
//
// // B 继承 A 的静态属性
// Object.setPrototypeOf(B, A);
//
// const b = new B();

