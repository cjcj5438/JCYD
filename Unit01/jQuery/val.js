//jQuery 的重载

// $("").val() //取值赋值 方法解读

// old undefined   obj.find->find0
// old find0       obj.find->find1
// old find1       obj.find-find2

function addMethod(obj,name,f) {
    var old = obj[name];
    obj[name]=function () {
        if (f.length === arguments.length) {
            //代码解读  笔记5
            //1, 这里的this 是谁 ,为什么是它
            //apply 的语法: 这里的this 对象将代替 .apply 点前面的方法()里面的this对象, arguments :(是find0里面的\ 的参数)
            return f.apply(this, arguments) //
        } else {
            return old.apply(this, arguments)
        }
    }
}

var people = {
    name: ["张山", "李四", "王二"]
};
var findO = function () {
    return this.name;
};
var find1 = function (name) {
    var arr = this.name;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == name) {
            return arr[i] + '在' + i + '位'
        }
    }
};
var find2 = function (name, age) {
    console.log(name,age)
}
addMethod(people, "find", findO);
addMethod(people, "find", find1);
addMethod(people, "find", find2);
people.find("李四","nihao");

