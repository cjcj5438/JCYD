// iterator 迭代器 遍历
// 异步写成同步 一般是要配置babel的
let qq=function* () {
    yield '我';
    yield '爱';
    yield '辣条';
};
const ss=qq();
console.log(ss.next())
console.log(ss.next())
console.log(ss.next())
console.log(ss.next())

//2
const arr=['桔','果','梨'];
for(var i in arr){console.log(i)}
for(let i of arr){console.log(i)}


