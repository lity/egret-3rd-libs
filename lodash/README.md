为适配微信小游戏：
## 一、lodash.js 中查找
  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();
替换成：
  var root = navigator.userAgent.toString().indexOf("MicroMessenger") >= 0 ? {
    Array: Array,
    Date: Date,
    Error: Error,
    Function: Function,
    Math: Math,
    Object: Object,
    RegExp: RegExp,
    String: String,
    TypeError: TypeError,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval
  } : freeGlobal || freeSelf || Function('return this')();

## 二、lodash.js最后// Export for CommonJS support.下方需增加一行：
    window._ = _;

## 三、编译

egret build lodash

## 四、编译通不过可能时版本问题，可以指定版本

lodash 4.17.5
@types/Lodash 4.14.108