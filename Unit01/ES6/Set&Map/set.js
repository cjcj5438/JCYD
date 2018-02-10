// set 和数组有点相像,特点是里面的值都是唯一的.本身是一个构造函数,需要我们去new 才能使用
let arr=new Set('我是谁');
arr.add('你')
arr.add('你')//可以区别重复 放的时候自动去重
arr.delete('他')
console.log(arr)
console.log(arr.size)//长度
console.log(arr.has('我'))//是否有 这个
for (let d of arr){
    console.log(d)
}
// 清除
arr.clear()
console.log(arr)