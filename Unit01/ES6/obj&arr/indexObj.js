//1 对象的比较 比较是不是对象
console.log(NaN, NaN);
console.log(Object.is(NaN,NaN))
console.log(Object.is(1,1))

const eat={
    getEat(){
        return 'eat'
    }
}
const drink={
    getDrink(){
        return 'drink';
    }
}
//创建原先链上的方法
let sunday = Object.create(eat);
console.log(sunday.getEat());
console.log(Object.getPrototypeOf(sunday))
//设置修改原先链上的方法  1️⃣
Object.setPrototypeOf(sunday,{drink,eat})
console.log(Object.getPrototypeOf(sunday))
//设置修改原先链上的方法  2️⃣
//........
let subday={
    __proto__:eat
}
console.log(subday.getEat());
subday.__proto__=drink;
//.........
console.log(subday.getDrink())
//........
subday={
    __proto__:drink,
    getDrink(){
        return super.getDrink()+"coffe"//super 可以调用原型链上的方法
    }
}
console.log(subday.getDrink())