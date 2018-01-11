var user={
    age:20,
    init:function () {
        console.log(this.age)
    }
}
var data = {age :40}
var s=user.init.bind(data)//把data的值绑到user.init上 同时要用变量接着
s();