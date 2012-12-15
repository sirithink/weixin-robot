# 微信公共帐号机器人(Weixin Robot)

[微信公众平台](http://mp.weixin.qq.com/cgi-bin/indexpage?t=wxm-index&lang=zh_CN)提供的[开放信息接口](http://mp.weixin.qq.com/cgi-bin/indexpage?t=wxm-callbackapi-doc&lang=zh_CN)的自动回复系统，基于`node.js` 实现。

___

**mark by nasa:**

`2012-12-05` 今天在网上看到了"<http://www.36kr.com/p/177735.html>"这个微信机器人可以向这个方向发展下。

___
## 功能：

1. 清晰独立的 router ，轻松实现文本匹配流程控制
2. 基于正则表达式的对话设定，配置简单，可以给一句话随机回复不同内容
3. 支持等待后续操作模式，如可以提示用户“需要我执行xxx操作吗？”

添加微信帐号 douban-event ，试试效果

![豆瓣同城微信帐号二维码：douban-event](http://i.imgur.com/ijE19.jpg)

## 使用方法：

- [Usage](https://github.com/ktmud/weixin-robot/wiki/Usage)
- [API](https://github.com/ktmud/weixin-robot/wiki/API)

可以参照 `exapmles/app.js` 。

提供可执行文件 `webot` 用于发送测试消息。

例子：webot -p `host` -t `token`

```
  Usage: webot [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -l, --location             Send a <location> (geo, latlng)
    -t, --token [value]        Provide weixin token
    -n, --host [value]         Set request hostname, defaults to 127.0.0.1
    -p, --port <n>             The port your service is listening to, defaults to 3000
    -d, --destination [value]  The request destination url, will override "host" and "port"
```


Have fun with weixin, enjoy being a robot!

## LICENSE

(the DON'T CARE WHAT YOU DO WITH IT license)
