//测试钩子函数的作用域
const ss={
    a:40,
    p:function(){
        const qq={
            a:50,
            test:function (){
                console.log(this.a)
            }
        }
        qq.test();
    }
}
ss.p();//这里输出的是50
window.a=10;
const s={
    a:40,
    p:function(){

        const qq={
            a:50,
            test:()=>{
                //这里的this 是qq 用钩子函数之后,作用域提升到了qq函数顶层 s 对象. 所以这里打印处理啊的结果是40
                console.log(this.a)
            }
        }
        qq.test();
    }
}
s.p();//这里输出的是40;