// $("").val() //取值赋值 方法解读

function addMethod(obj,name,f) {
    var old=obj[name];
    obj[name]=function () {
        if(f.length===arguments.length){
            return f.apply(this,arguments)
        }else{
            return old.apply(this,arguments)
        }
    }
}
var people={
    name:["张山","李四","王二"]
};
var findO=function () {
    return this.name;
};
addMethod(people,"find",findO);
people.find()