/**
 * @class WeBotExample 微信公众机器人的测试程序
 *
 * - 公众号名称: webot
 * - 微信号: weixin_bot
 * - 接口地址: [http://webot.cloudfoundry.com](http://webot.cloudfoundry.com)
 */

var express = require('express');
var log = require('debug')('webot.example.log');

var robot = require('../lib/robot')(require('./routes'), require('./waits'));
var webot = require('../lib/weixin');

// 不建议在正式环境中这样用
// 请安装 npm package `weixin-robot`，
// 然后：
//  var webot = require('weixin-robot');
//  var router = webot.router();
//  var waiter = webot.waiter();
//  var robot = webot.robot(router, waiter);

var messages = {
  '400': '听不懂你在说什么哦',
  '503': '服务器临时出了一点问题，您稍后再来好吗'
};

// 你在微信公众平台填写的 token
var WX_TOKEN = 'tumo';

// 启动服务
=======
var app = express();
app.enable('trust proxy');

//在真实环境中使用时请使用
//var webot = require('weixin-robot');
var webot;

try{
  webot = require('../');
  log('using ../');
}catch(e){
  webot = require('weixin-robot');
  log('using node-module');
}

//启动机器人,你在微信公众平台填写的token
webot.monitor('keyboardcat123', '/weixin', app);

//载入路由规则
require('./rules.js')(webot);

//设置文档的路径
app.use('/doc', express.static(__dirname+'/doc'));
app.get('/', function(req, res, next){
  res.redirect('/doc/index.html');
});

//微信后台只允许 80 端口，你可能需要自己做一层 proxy
app.listen(3000, '127.0.0.1', function(){
  log("WeBot Start... God bless love...");
});


