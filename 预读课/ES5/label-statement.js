/**
 * label statement 标注声明
 */
/**
 * 以往我们找值的时候会在外面设置一个变量,然后在循环找
 * 这样写话. 也可以实现找值
 */
loop:
for(var i=0;i<10;i++){
    for(var j=0;j<5;j++){
        console.log(j);
        if(j===1){
            console.log(" 我找到了");
            break loop;
        }
    }
}

console.log(i);