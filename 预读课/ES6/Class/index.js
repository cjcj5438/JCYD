class Person {
    //构造函数
    constructor(age) {
        this.age = age;
    }

    tell() {
        console.log(`他 age is${this.age}`)
    }
}
class Man extends Person {
    constructor(age) {
        super(age);
        this.arr = [];
    }
    //set 和 get 关键字方法
    set menu(data) {
        this.arr.push(data)
    }

    get menu() {
        return this.arr;
    }

    tell() {
        // 方法重写    要先super.tell 这个方法
        super.tell();
        console.log('hello');
    }
    //函数的静态声明     就是直接使用
    static init(){
        //一般可以在这里写一些变量什么的
        console.log('static')
    }

}
Man.init();
const xiaowang = new Man(30);
console.log(xiaowang.tell());
// set 和get 的用法 赋值和取值
xiaowang.menu = '水果';
xiaowang.menu = '水果';
xiaowang.menu = '水果';
console.log(xiaowang.menu);
