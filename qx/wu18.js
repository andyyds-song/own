/*
[rewrite_local]
^http://wu18\.cn/cg/zhanghao/ALogOn\.php url script-response-body https://raw.githubusercontent.com/andyyds-song/own/refs/heads/main/qx/wu18.js
[mitm]
hostname = wu18.cn
*/

console.log("脚本已执行");

let body = JSON.parse($response.body);
body.data = "登录成功";
body.time = "2026.12.13";

$done({ body: JSON.stringify(body) });