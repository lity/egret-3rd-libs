# egret-3rd-libs

我编译适配的egret第三方库

官方说明：[第三方库的使用方法](http://developer.egret.com/cn/github/egret-docs/extension/threes/instructions/index.html)

编译命令：

egret build colyseus

egret build lodash

egret build socket.io

## 关于 colyseus
    1. 由于egret的typescript版本较低，colyseus的类型声明.d.ts文件中有的语法不支持，需要修改。
    2. colyseus 在 egret native 上，有2点需要修改
       - webpack.config.js 中 globalObject 要修改为 "this"，因为egret native不支持self
       - colyseus使用的httpie在egret native中，请求返回值类型为json字符串，需要用JSON.parse转换为json对象。

## 关于 notepack
    self 要改为 this，因为egret native不支持self
