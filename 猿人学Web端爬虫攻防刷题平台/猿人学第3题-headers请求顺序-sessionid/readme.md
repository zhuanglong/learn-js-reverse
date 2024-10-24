# 思路

python 爬虫的反制，验证 headers 字段的顺序。

## sessionid

jssm 接口生成 sessionid

page 接口带上 sessionid

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241640830.png)

## postman 调试

jssm 接口响应头并没有返回 `set-cookie`。

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241644006.png)

ProxyPin 抓包浏览器的请求，并复制请求和响应。

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241647081.png)

```
Request
POST https://match.yuanrenxue.cn/jssm HTTP/1.1
Host: match.yuanrenxue.cn
Connection: keep-alive
Content-Length: 0
Pragma: no-cache
Cache-Control: no-cache
sec-ch-ua-platform: "Windows"
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0
sec-ch-ua: "Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"
sec-ch-ua-mobile: ?0
Accept: */*
Origin: https://match.yuanrenxue.cn
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://match.yuanrenxue.cn/match/3
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Cookie: Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1729752749; HMACCOUNT=2336DB6C8C76EB56; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1729752749; qpfccr=true; no-alert3=true; tk=3750814722727243412; sessionid=ooc4pydnyzplr7y5x4and5fehrumuqyu; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1729759089; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1729759095
```

需要把 `Cookie` 设为空，格式化后如下：

```
Host:match.yuanrenxue.cn
Connection:keep-alive
Content-Length:0
Pragma:no-cache
Cache-Control:no-cache
sec-ch-ua-platform:"Windows"
User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0
sec-ch-ua:"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"
sec-ch-ua-mobile:?0
Accept:*/*
Origin:https://match.yuanrenxue.cn
Sec-Fetch-Site:same-origin
Sec-Fetch-Mode:cors
Sec-Fetch-Dest:empty
Referer:https://match.yuanrenxue.cn/match/3
Accept-Encoding:gzip, deflate, br, zstd
Accept-Language:zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Cookie:""
```

复制到 postman Deaders 中再次请求，成功返回。

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241653690.png)

按以上步骤，提取 page 接口的请求头，格式化后如下：

```
Host:match.yuanrenxue.cn
Connection:keep-alive
Pragma:no-cache
Cache-Control:no-cache
sec-ch-ua-platform:"Windows"
X-Requested-With:XMLHttpRequest
User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0
Accept:application/json, text/javascript, */*; q=0.01
sec-ch-ua:"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"
sec-ch-ua-mobile:?0
Sec-Fetch-Site:same-origin
Sec-Fetch-Mode:cors
Sec-Fetch-Dest:empty
Referer:https://match.yuanrenxue.cn/match/3
Accept-Encoding:gzip, deflate, br, zstd
Accept-Language:zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
```

注：jssm 生成的 sessionid 使用后失效，需要重新执行 jssm 生成。

参考：

- https://github.com/luzhisheng/js_reverse/tree/master/%E7%8C%BF%E4%BA%BA%E5%AD%A6Web%E7%AB%AF%E7%88%AC%E8%99%AB%E6%94%BB%E9%98%B2%E5%88%B7%E9%A2%98%E5%B9%B3%E5%8F%B0/%E7%8C%BF%E4%BA%BA%E5%AD%A6%E7%AC%AC3%E9%A2%98-headers%E8%AF%B7%E6%B1%82%E9%A1%BA%E5%BA%8F-sessionid