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
 *  p1 和 p2 的promise实例
 * @type {Promise<any>}
 */
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error('fail')),3000);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(p1)},1000)
});
p2.then(result=>console.log(result))
    .catch(error=>console.log(error));

