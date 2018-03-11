//封装继承的方法
function inherits(child, parent) {
    var _proptotype = Object.create(parent.prototype);
    _proptotype.constructor = child.prototype.constructor;
    child.prototype = _proptotype;
}

function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.getName = function () {
    return this.name;
}

function English(name, age, language) {
    People.call(this, name, age); //首先借用了People的构造函数
    this.language = language;
}

inherits(English, People);

English.prototype.introduce = function () {
    console.log(this.getName());
    console.log(this.language);
}

function Chinese(name, age, language) {
    People.call(this, name, age);
    this.language = language;
}

inherits(Chinese, People);
Chinese.prototype.introduce=function () {
    console.log(this.getName());
    console.log(this.language);
}
var en = new English("byron", 26, 'English');
var cn = new Chinese("你哈", 27, "汉语");

en.introduce();
cn.introduce();
