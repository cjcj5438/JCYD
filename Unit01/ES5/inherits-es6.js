//封装的方法
class People{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
}

class English extends People{
    //constructor 子类和父类构造函数相同  可以不写 .默认使用父类的构造函数;;只是方法不一样的话
    //constructor 如果写了.需要显示的调用super
       constructor(name,age,language){
        super(name, age);//调用父类的构造函数
        this.language=language;
    }
    introduce(){
        console.log(this.getName());
        console.log(this.language);
    }
}