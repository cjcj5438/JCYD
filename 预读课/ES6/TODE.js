/**
 * ES6 在企业中的应用
 */
/**
 * 模块语法
 * //es6
 * import {$} from 'jquery.js';
 * export {$};
 * //amd
 * var $=require('jquery.js')['$']
 * export.$=$;
 *  按需引入vs 全局引入
 *  多点暴露 vs 全局暴露
 *
 */

/**
 *  字符串
 */

/**
 *  解构
 */
function add([x,y]){
    return x+y;
}
add([100,200])


/**
 *  字符串
 */

/**
 *  字符串
 */
function Parent() {

}
class Child extends Parent{
    constructor(){
        super();
        this.value=1;
    }
    get(){
        return this.value;
    }
}
var s=new Child();
s.get()


