const s="我付电话费是第几个123";
//api 字符串转数组
const result=Array.from(s);
console.log(result)
//拼接 数组的扩展运算符
const t=["我","的",...s]
console.log(t)

// 对象    变量和对象的简写;
const obj={}  //在vue里面有详细的写法

// 对象里面添加方法
const  a={};
Object.assign(a,{x:2});
console.log(a.x);
// 建议写法
const c={x:null}
c.x=2;
console.log(c.x);