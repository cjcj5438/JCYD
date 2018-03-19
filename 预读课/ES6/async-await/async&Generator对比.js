

const fs = require('fs');

const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        })
    })
};
// const gen=function* () {
//     const f1 = yield  readFile('/a.txt');
//     const f2 = yield readFile('/b.txt');
//     console.log(f1.toString());
//     console.log(f2.toString());
// }
// gen();

/**
 * async await
 * 1,不像Genertor 函数需要执行器, async 可以直接按行执行. 和普通函数一样
 * 2,语义清楚了. async 表示函数里面有异步操作,await表示紧跟着后面的表达式需要等待的结果.
 * 3,await 后面的函数可以是promise 对象或者是原始 对象的值,
 * 4, 返回对象是promise 更好操作. 不想是Generator返回的是iterator 对象.需要遍历使用
 * @returns {Promise<void>}
 */
const asyncReadFile = async function () {
    const f1 = await  readFile('a.txt');
    const f2 = await readFile('b.txt');
    console.log(f1.toString());
    console.log(f2.toString());
};
asyncReadFile();