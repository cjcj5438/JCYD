// 配置.babelrc文件
// 首先安装es2015的presets字段
//
// $ npm install --save-dev babel-preset-es2015
// 然后写入.babelrc
//
// {
//     "presets":[
//     "es2015"
// ]
// }
// 命令行转码babel-cli
// $ npm install --global babel-cli
// 基本用法如下：
//
// # 转码结果输出到标准输出
// $ babel example.js
//
// # 转码结果写入一个文件
// # --out-file 或 -o 参数指定输出文件
// $ babel example.js --out-file compiled.js
// # 或者
// $ babel example.js -o compiled.js
//
// # 整个目录转码
// # --out-dir 或 -d 参数指定输出目录
// $ babel src --out-dir lib
// # 或者
// $ babel src -d lib
//
// # -s 参数生成source map文件
// $ babel src -d lib -s
// 另一种方法是将babel-cli安装在项目中
//
// $ npm install --save-dev babel-cli
// 然后，在package.json中加入：
//
// {
//     "scripts":{
//     "build":"babel src -d lib"
// }
// }
// 转码的时候，就执行下面的命令:
//
//     $ npm run build
// 关于npm scripts的更多用法详见阮一峰教程
// babel-node
// 可以直接运行ES6代码
//
// babel-node已安装在babel-cli中，所以无须额外安装
// $ babel-node index.js
// babel-node也已经安装在babel-cli中，无须额外安装
// 同样，改写package.json
//
// {
//     "scripts":{
//     "start":"babel-node index.js"
// }
// }
// babel-register
// babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。
// 首先安装：
//
// $ npm install --save-dev babel-register
// 使用时在文件头加载：
//
// require("babel-register");
// require("./index.js");
// 然后，就不需要手动对index.js转码了。

let p = new Promise((resolve, reject) => {
    // ...
    resolve('success');
});

p.then(result => {
    console.log(result);
});