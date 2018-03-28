// 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。 
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
// Cruze子 类实现父类颜色是红色，价格是140000,
// 售卖方法实现输出如下语句：将 红色的Cruze 买给了小王价格是14万。（
class Car {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
    sell() {
        console.log(`${this.color}的${this.price}的车`)
    }
}

class Cruze extends Car {
    // constructor() {
    //     super()
    // }
    sell(name){
        console.log(`将${this.color}的Cruze 买给了${name}价格是${this.price}的车`)
    }
}
const cruze=new Cruze("red","140000");
cruze.sell("小王")

