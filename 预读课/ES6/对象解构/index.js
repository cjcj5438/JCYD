//数组解构
const s = ["s", "g", "f"];
const [first,second,three]=s;
console.log(three);
//对象解构
function test() {
    return {
        a:1,
        b:2
    }
}
const result=test();
// 通常我们取值是  用 result.a 来取值
// 用解构 来取值  要参数一样的, 但是顺序可以变
const {a,b}=result;
console.log(a)