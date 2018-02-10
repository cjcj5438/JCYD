const a='qererterwt';
const e='鼎折覆餗高档次高';
const f=`asdaf   sd${e}fasdf  asdfsaf     dd`;
console.log(f)

// api
console.log(f.startsWith('asd'));//以什么开头
console.log(f.endsWith('asd'));//以什么结尾
console.log(f.includes('fa'));//包含字符  等等还有好多方法

// 在函数上使用
const d=test `asdaf   sd${e}fasdf  asdfsaf     dd`;
function test(s,...v) {
    console.log(s)
    console.log(v)
}