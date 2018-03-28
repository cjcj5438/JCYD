// .请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么(8分)
this.a = 20;
var test = {
    a: 40,
    init: () => {
        console.log(this.a);
        function go() {
            // this.a = 60; 
            console.log(this.a);
        }
        go.prototype.a = 50;
        return go;
    }
};
// var p = test.init(); 
// p(); 
new (test.init())();

/**
 * 答:
 * 注释
 * 20
 * 50
 *
 * 未注释
 * 20
 * 60
 * 20 60
 */
