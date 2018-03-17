/**
 * 简单的Promise
 * @param ms
 * @returns {Promise<any>}
 */
// function test(ms) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,"执行时间");
//     })
// }
// test(1000).then(value => console.log(value));

/**
 * Promise 的执行顺序
 * 实例化Promise 是最先执行的
 * 然后才会执行resolve();
 * @type {Promise<any>}
 */
// let promise=new Promise((resolve,reject)=>{
//     console.log("Promise");
//     resolve();
// })
// promise.then(()=>{
//     console.log("resolve");
// })
// console.log("hi");

/**
 * 用Promise 来包装图片异步加载的
 * @param url
 * @returns {Promise<any>}
 */
// function loadImageAsync(url) {
//     return new Promise((resolve,reject)=>{
//         const image = new Image();
//         image.onload=function(){
//             resolve(image);
//         };
//         image.onerror=function(){
//             reject(new Erroe("could not load image at" + url))
//         };
//         image.src=url;
//     })
// }
// loadImageAsync('http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg').then((value)=>{
//         console.log(value)
// });
﻿
/**
 * Promise 封装AJAX
 * @param url
 * @returns {Promise<any>}
 */
// const getJSON = function(url) {
//     const promise = new Promise(function(resolve, reject){
//         const handler = function() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//
//     });
//
//     return promise;
// };
// getJSON("http://183.136.177.4:8084/api/PlatformUI/GetAllCaseNumber").then(function(json) {
//     console.log(json);
//
// }, function(error) {
//     console.error('出错了', error);
// });


/**
 *  多个promise实例嵌套的执行顺序
 *  会等第一个函数执行  有时候在后面加上return 就不会出现意外了
 * @type {Promise<any>}
 */
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject(new Error('fail')),3000);
// });
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve(p1)},1000)
// });
// p2.then(result=>console.log(result))
//     .catch(error=>console.log(error));

/**
 * Promise.prototype.then()
 * then方法的第一个参数是resolved状态的回调函数，
 * 第二个参数（可选）是rejected状态的回调函数。
 */

/**
 * Promise.prototype.catch()
 * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 */

/**
 * “Promise 会吃掉错误”
 *  就是在promise 上面的报错.  代码会执行完
 */
// const someAsyncThing=function () {
//     return new Promise((resolve,reject)=>{
//         resolve(x+2);
//     })
// }
// someAsyncThing().then(()=>{
//     console.log("everything is great");
// }).catch(function(error) {
//     console.log('oh no', error);
// })
// setTimeout(()=>{console.log(123)},2000);

/**
 * Promise.prototype.finally()
 * 这是ES8 引入的标准
 * 指定不管promise 的状态怎么样. 都会执行finally() 方法
 */

/**
 * Promise.all()
 *  p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，
 *  p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，
 *  导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，
 *  而不会调用catch方法指定的回调函数。
 *
 *  如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
 */
// const p1=new Promise((resolve,reject)=>{
//     resolve("hello")
// }).then(result=>result)
//     .catch(e=>e);
// const p2 = new Promise((resolve, reject) => {
//     throw new Error("报错了");
// }).then(result => result)
//     .catch(e => e);
// Promise.all([p1,p2]).then(
//     result=>console.log(result)
// ).catch(e=>console.log(e));

/**
 * Promise.resolve() 现有对象转为Promise对象 eg1
 * Promise.resolve方法的参数分成四种情况。
 * 参数是一个Promise 实例,那么Promise.resolve将原封不动的返回这个实例
 * 参数是一个thenable对象:Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。eg2
 * 参数不是具有then方法的对象，或根本就不是对象: 参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。;eg3
 * 不带有任何参数: 一般用于设定代码执行顺序 eg4
 */
// // eg1
// Promise.resolve("foo");
// // 等价于
// new Promise(resolve => resolve("foo"))
// //eg2
// let thenable = {
//     then: function (resolve, reject) {
//         resolve(42);
//     }
// };
// let p1 = Promise.resolve(thenable);
// p1.then(value => console.log(value));
// //eg3
// const p = Promise.resolve("hello");
// p.then(s=>console.log(s))
// // eg4
// setTimeout(function () {
//     console.log('three');
// }, 0);
//
// Promise.resolve().then(function () {
//     console.log('two');
// });
//
// console.log('one');
// //setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
// // Promise.resolve()在本轮“事件循环”结束时执行，
// // console.log('one')则是立即执行，因此最先输出。

/**
 *  Promise.try()
 *  Promise.try为所有操作提供了统一的处理机制
 *  所以如果想用then方法管理流程，最好都用Promise.try包装一下。这样有许多好处，其中一点就是可以更好地管理异常。
 *  const f = () => console.log('now');
     Promise.try(f);
     console.log('next');
 */



