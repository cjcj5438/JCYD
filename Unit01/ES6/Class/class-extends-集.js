/**
 * 基本格式
 *  如果参数都一样,同时和父类的方法一样,,可以不用加 constructor
 *  如果不一样的话. 子类必须在 constructor 中调用super 方法,否则新建的实例就会
     *  报错,这是应为子类没有自己的this 对象, 而是继承父类的this对象,然后进行加工,如果不调
     *  super方法,子类就找不到this对象.
 *
 *  父类的静态方法也会被子类继承
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        // this.color = color; // ReferenceError
        super(x, y);// 调用父类的constructor(x, y)
        this.color = color; // 正确
    }

    toString() {
        return this.color + ' ' + super.toString();// 调用父类的toString()
    }
}
let cp = new ColorPoint(25, 8, 'green');

// cp instanceof ColorPoint // true
// cp instanceof Point // true

/**
 * Object.getPrototypeOf()
 * 可以用来从子类上获取父类
 * 因此,可以使用这个方法判断, 一个类是否继承了另一个类
 */
console.log(Object.getPrototypeOf(ColorPoint) === Point)


/**
 * super  关键字
 * 有两种情况 用法完全不一样
 *      1,当做函数
 *      2,当作对象
 */



