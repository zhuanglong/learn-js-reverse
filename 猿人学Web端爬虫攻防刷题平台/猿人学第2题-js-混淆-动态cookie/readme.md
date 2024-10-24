## 1. hook `cookie`

勾选`事件侦听器-脚本`断点，然后控制台执行以下 hook 代码

```js
(function () {
  'use strict';
  var cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf('m') != -1) {
        debugger;
      }
      console.log('Hook捕获到cookie设置->', val);
      cookieTemp = val;
      return val;
    },
    get: function () {
      return cookieTemp;
    },
  });
})();
```

## 2. 解混淆

```js
// 原混淆代码
document[$dbsm_0x4945('\x30\x78\x31\x33\x39', '\x59\x56\x28\x2a') + $dbsm_0x4945('\x30\x78\x31\x30\x39', '\x58\x61\x52\x61')] = _0x1d28bf['\x68\x4f\x53' + '\x58\x67'](_0x1d28bf['\x6a\x54\x57' + '\x63\x4c'](_0x1d28bf[$dbsm_0x4945('\x30\x78\x33', '\x62\x24\x4f\x61') + '\x63\x4c'](_0x1d28bf[$dbsm_0x4945('\x30\x78\x36', '\x6a\x5b\x76\x57') + '\x63\x4c'](_0x1d28bf[$dbsm_0x4945('\x30\x78\x31\x39\x61', '\x62\x24\x4f\x61') + '\x72\x44'](_0x1d28bf[$dbsm_0x4945('\x30\x78\x33\x65\x35', '\x24\x58\x74\x79') + '\x6c\x66']('\x6d', _0x1d28bf[$dbsm_0x4945('\x30\x78\x61', '\x6a\x5b\x76\x57') + '\x65\x53'](_0x454d41)), '\x3d'), _0x1d28bf[$dbsm_0x4945('\x30\x78\x32\x61', '\x5b\x4f\x5a\x54') + '\x41\x65'](_0x145d46, _0x103d4e)), '\x7c'), _0x103d4e), _0x1d28bf['\x4e\x66\x66' + '\x70\x58']);

// 解混淆如下
document['cookie'] = _0x1d28bf['hOSXg'](_0x1d28bf['jTWcL'](_0x1d28bf['jTWcL'](_0x1d28bf['jTWcL'](_0x1d28bf['dyTrD'](_0x1d28bf['oIAlf']('m', _0x1d28bf['GiEeS'](_0x454d41)), '='), _0x1d28bf['uXxAe'](_0x145d46, _0x103d4e)), '|'), _0x103d4e), _0x1d28bf['NffpX']);

// === 下面逐个分解 ===

// 时间戳 1729490593000
_0x103d4e

// 找到实际生成 cookie 的函数
_0x1d28bf[$dbsm_0x4945('\x30\x78\x32\x61', '\x5b\x4f\x5a\x54') + '\x41\x65']
// $dbsm_0x4945('\x30\x78\x32\x61', '\x5b\x4f\x5a\x54') + '\x41\x65' => 'uXxAe'

// 参数1是函数，参数2是时间戳，执行该函数返回值等于 'c7e9a48119c8ce438d250b916c870db1'
_0x1d28bf['uXxAe'](_0x145d46, 1729490593000)

// 跳转到 _0x1d28bf['uXxAe']，如下：参数1是函数，参数2是时间戳
_0x1a8a27[$dbsm_0x4945('\x30\x78\x32\x31\x65', '\x24\x58\x74\x79') + '\x41\x65'] = function(_0x27ae6a, _0x8a21ea) {
  return _0x27ae6a(_0x8a21ea);
}

// _0x27ae6a 实际上是 _0x145d46，到 _0x145d46 处定位到该函数，
// 该就是真正生成 cookie 的函数，该函数的参数1是时间戳
function _0x145d46(_0x42c8ef, _0x4dcfdf, _0xc7821d) {
  // ...
}
```

## 3. copy js 代码单独调用

### 3.1 先注释 `location.reload()`

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231629413.png)

### 3.2 两处正则判断错误

#### 3.2.1 重载 js 出现报错

```
Uncaught RangeError: Invalid string length
    at Object.setCookie (core.js:20:42)
```

发现在 setCookie 函数里报错，`debugger;` 发现有正则判断，然后修改：

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231459806.png)

```js
'removeCookie': function() {
    return 'dev';
},
// =>
'removeCookie': function() {return 'dev';},
```

#### 3.2.2 再次重载出现报错

```
ncaught RangeError: Invalid array length
    at Array.push (<anonymous>)
    at _0x415485.tgLhyj (core.js:151:43)
```

发现在 `['tgLhyj']` 函数里报错，`debugger;` 发现有正则判断，然后修改：![](https://gitee.com/zloooong/image_store/raw/master/img/202410231507108.png)

```js
this['VfKYTV'] = function() {
    return 'newState';
}
;
// =>
this['VfKYTV'] = function() {return 'newState';};
```

### 3.3 修复以上正则后执行进入死循环

这时候需要进行 `范围断点` ，过程比较繁琐，需要逐步断点找出死循环的位置。

```
// 在 line:164 debugger;
debugger;
(function $dbsm_0x341cf0(_0xddcabc) {
```

最后定位到 `return !_0x2189d2[$dbsm_0x4945('\x30\x78\x33\x65', '\x24\x58\x53\x38') + '\x74'](_0x4c5e71);` 处，发现是一个正则判断。

![](https://gitee.com/zloooong/image_store/raw/master/img/%E5%8A%A8%E7%94%BB-tuya.gif)

定位到第一个调用堆栈，发现有个 setInterval，先注释掉看看。

```js
// _0x1d28bf[$dbsm_0x4945('\x30\x78\x31\x66\x33', '\x73\x69\x34\x6f') + '\x5a\x66'](setInterval, _0x1d28bf[$dbsm_0x4945('\x30\x78\x63\x31', '\x51\x45\x30\x61') + '\x65\x53'](_0x454d41), 0x1f4);
```

重载 js，发现定位到 cookie 生成处，继续执行发现又进入死循环。

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231648728.png)

重载 js，发现又定位到了 `return !_0x2189d2[$dbsm_0x4945('\x30\x78\x33\x65', '\x24\x58\x53\x38') + '\x74'](_0x4c5e71);` 处，然后跳转到该函数，

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231753062.png)

死循环代码如下：

![](https://gitee.com/zloooong/image_store/raw/master/img/image-20241023175538728.png)

修改变量 `var _0x5115cc = !![];` => `var _0x5115cc = false;` ，这样就不会执行到该函数。

<marK>重载 js，成功打印 cookie。</mark>

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231807133.png)

## 4. 调用 _0x145d46 函数

找到开始调用的地方，然后注释掉。

![](https://gitee.com/zloooong/image_store/raw/master/img/202410231815056.png)

定义函数调用。

```js
// 真正生成 cookie 的是 _0x145d46 函数，把它带出
window.my_0x145d46 = _0x145d46;

// 定义函数调用
function playload_m() {
    var timeStamp = Date['\x70\x61\x72' + '\x73\x65'](new Date());
    var encrypted = my_0x145d46(timeStamp);
    var mValue = 'm=' + encrypted + '|' + timeStamp;
    alert(mValue);
}

playload_m();
```

## 5. `console.log` 报错问题

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241031305.png)

这是因为 `console.log` 被重写了，在最开始的位置把 `console.log` 赋值给另一个值即可。

```
myconsole = console.log;
```

全部环境修复：

```js
// 修复环境值
var window = window || {};
var navigator = navigator || {};

// 修复打印
var myconsole = console.log;
```



参考：

- https://www.cnblogs.com/zichliang/p/17433941.html
- https://blog.csdn.net/Yy_Rose/article/details/126854940