const fn=function () {

}
console.log(fn.name); //写这个有什么用.? 就是在node 渲染资源的时候可以定位到函数;


//钩子函数
//1
(()=>{
    console.log('fn init')
})();
//2
const result=[1,2,3].map(function (index) {
    return index*3;
})
console.log(result)
//改成钩子函数的写法
const result2=[1,2,5].map(index=>index*3)
console.log(result2)

//3 钩子函数绑定作用域
a=50;
const s={
    a:40,
    p:()=>{
        console.log(this.a)
    }
}
s.p();//钩子之后 反正都是最顶层函数值

//4 函数参数初始化
function test(a=1,{option=true}={}) {
    console.log(a,option)
}
test()
test({option:false})
test(30,{option:true})
// //如果对象很多的话  代替以前的arguments
function test(...re) {
    console.log(re)
}
test()
test({option:false})
test(30,{option:true})


