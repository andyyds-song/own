// == MYScript ==
// @name          兼容请求头+响应体
// @scriptType    request-header, response-body
// @match         *://wu18.cn/*
// @match         *://*.wu18.cn/*
// ==/MYScript ==

// 处理请求头（request-header）
if ($type === 'request-header') {
  // 这里可以加请求头修改逻辑
  // $request.headers['User-Agent'] = '...';
  $done({ headers: $request.headers });
}

// 处理响应体（response-body）
else if ($type === 'response-body') {
  let body = $response.body;

  // 示例：把登录失败改成成功（按需改）
  // body = body.replace('登录失败', '登录成功');

  $done({ body: body });
}

// 其他情况直接放行
else {
  $done({});
}