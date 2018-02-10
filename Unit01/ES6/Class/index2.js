class Person{
    //构造函数
    constructor(age){
        this.age=age;
    }
    tell(){
        console.log(`他 age is${this.age}`)
    }
    test(){
        console.log(`xiaowang age is${this.age}`)
    }
}
const xiaowwang=new Person(30)
console.log(xiaowwang.age)
console.log(xiaowwang.test())
