## 1. 去掉循环 `console.log`

点击进入动态执行的代码，堆栈找到 `_$KS`，替换打印的内容即可。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412051802359.png)

![image-20241205180505943](C:\Users\long.zhuang\AppData\Roaming\Typora\typora-user-images\image-20241205180505943.png)

## 2. 加密参数

### 2.1 找到加密参数

在 Postman 验证，需要 `m,f` ，`cookie m= RM4hZBv0dDon443M=` 4个加密参数。

```
https://match.yuanrenxue.cn/api/match/5?m=1733393172352&f=1733393168000

cookie: m=xx;RM4hZBv0dDon443M=xx;
```

`m,f` 参数在这里赋值。

```js
var list={"page":window.page,"m":window._$is,"f":window.$_zw[23]};
```

### 2.2 `m` 参数

#### 2.2.1 hook `m` 参数

先断点。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412051812883.png)

刷新页面，到 debugger 时，加入 hook 代码：

```js
(function () {
  'use strict';
  var cacheVal = '';
  Object.defineProperty(window, '_$is', {
    set: function (val) {
      debugger;
      console.log('Hook捕获到_$is设置->', val);
      cacheVal = val
      return val;
    },
    // get: function () {
    //  return cacheVal;
    //},
  });
})();
```

hook 到 `m` 参数。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412051814719.png)

堆栈查找，加密代码如下，接下来就是扣代码。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412051816675.png)

#### 2.2.2 扣代码

主要代码如下：

```js
function _0x2d5f5b() {
    return new _0x35bb1d()['valueOf']();
}
_$yw = _0x2d5f5b()[_$UH[0x1f]]();
```

```js
function _0x2b8a17(_0x36f847) {
    return unescape(encodeURIComponent(_0x36f847));
}
function _0x41873d(_0x5a6962) {
    return _0x1ee7ec(_0x2b8a17(_0x5a6962));
}
function _0x37614a(_0x32e7c1) {
    return _0x499969(_0x41873d(_0x32e7c1));
}
function _0x474032(_0x233f82, _0xe2ed33, _0x3229f9) {
    return _0x37614a(_0x233f82);
}
_0x474032(_$yw)
```

`_0x474032` 函数内部调用层级较深，扣代码很麻烦，直接在控制台输出 `$_ow` 复制动态代码，粘贴到这里。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061049841.png)

把 `_0x474032` 函数赋值给 `window` 变量，直接在复制的 `$_ow` 修改。

```js
window._0x474032 = _0x474032;
```

执行：`window._0x474032('1733457000411');` 发现该函数不存在，

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061404560.png)

赋值 `_0x3180ec` 函数，还是上面的报错。

```
window._0x3180ec = _0x3180ec;
```

全局搜索 `_0x3180ec`，发现此处有个赋值，先断点试试。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061411450.png)

发现是做了反爬，

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061415747.png)

加 `return;` ，并注释掉这两行代码。

```js
return;/*_0x3180ec=_0x1a2c94('0x0','kGWD'),ur=_0x1a2c94('0x1','iw3E');*/
```

控制台执行，正常输出，调试成功。

```
window._0x474032('1733457000411'); // 'e9573e8f8f7cb9dc293ae3271f5ff1ea'
```

### 2.3 `f` 参数

搜索下，发现在此处定义。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061549225.png)

往下走，可以看出是一个个 push 的，

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061551738.png)

继续，由此推断出 `23` 的下标值 `$_t1`。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412061554421.png)

找到 `$_t1` 如下，也就是 `f` 参数。

```
let $_t1 = Date.parse(new Date());
```

### 2.4 `RM4hZBv0dDon443M` 参数

#### 2.4.1 hook cookie `RM4hZBv0dDon443M`

```js
(function () {
  'use strict';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
       if (val.indexOf('RM4hZBv0dDon443M') !== -1) {
          debugger;
          console.log('Hook捕获->', val);   
       }
      return val;
    }
  });
})();
```

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091621396.png)

#### 2.4.2 hook `_$ss` 变量

```js
(function () {
  'use strict';
  var cacheVal = '';
  Object.defineProperty(window, '_$ss', {
    set: function (val) {
      debugger;
      console.log('Hook捕获到_$ss设置->', val);
      cacheVal = val
      return val;
    },
    // get: function () {
    //  return cacheVal;
    //},
  });
})();
```

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091625756.png)

在上面断点后刷新页面，逐步断点到下面的 `_0x29dd83[_$UH[0x1f]]();` 处，发现生成的值一致，得出这块代码生成 cookie。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091628924.png)

#### 2.4.3 解析参数

断点的核心代码，也就是生成 cookie `RM4hZBv0dDon443M` 的代码：

```js
// 混淆的代码：
_$Ww = _$Tk[_$UH[0x2db]][_$UH[0x2dc]][_$UH[0xff]](_0x4e96b4['_$pr'][_$UH[0x1f]]()),
_0x29dd83 = _$Tk['A' + _$UH[0x32d]][_$UH[0x337] + _$UH[0x336]](_$Ww, _0x4e96b4[_0xc77418('0x6', 'OCbs')], {
    'mode': _$Tk[_$UH[0x339] + _$UH[0x33a]][_$UH[0x2e5]],
    'padding': _$Tk[_$UH[0x33b]][_$UH[0x33c] + _$UH[0x33d]]
}),
_0x4e96b4['_$' + _$UH[0x348][0x1] + _$UH[0x353][0x1]] = _0x29dd83[_$UH[0x1f]]();

解混淆：
_$Ww = CryptoJS['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']()),
_0x29dd83 = CryptoJS['AES']['encrypt']($ww, _0x4e96b4[_0xc77418('0x6', 'OCbs')], {
    mode: CryptoJS['mode']['ECB'],
    padding: CryptoJS['pad']['Pkcs7']
}),
_0x29dd83['toString']();
```

需要找出以下对应的参数。

```
_0x4e96b4['_$pr'] => window['_$pr']
_0x4e96b4[_0xc77418('0x6', 'OCbs') => window['_$qF']
```

**_0x4e96b4['_$pr'] => window['_$pr']**

监听 `_0x4e96b4['_$pr']` 的变化，发现 `eval($_ow)` 之前为空，到 `_0x3d0f3f` 处长度为 4，`_0x4e96b4['_$pr']['push'](_0x474032(_$yw));` 之后为 5，由此可得，只要找出 0-4 下标的值即可。

下标 5 的值由 `_0x474032` 函数（`2.2.2` 章节）生成。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091726603.png)

全局搜索 `_0x4e96b4['_$pr']['push']` ，发现有 4 个，逐个断点后发现在第 4 个有变化。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091732404.png)

`_$Wa` 由 `_0x12eaf3()` 生成，所以我们只要执行 4 次 `_0x474032(_0x12eaf3())` 就能得到 `_0x4e96b4['_$pr']` 0-4 的值。

```
function _0x12eaf3() {
	return _0x35bb1d[_$UH[0xff]](new _0x35bb1d());
	// 解混淆：
	// return Date['parse'](new Date());
}
```

**_0x4e96b4[_0xc77418('0x6', 'OCbs') => window['_$qF']**

全局搜索 `'_$qF'` ，发现有 3 个，逐个断点后发现在第 1 个有变化。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412091748626.png)

以上代码解混淆如下：

```
混淆的代码：
_0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8'][_$UH[0xff]](_0x4e96b4['btoa'](_0x4e96b4['_$is'])['slice'](0x0, 0x10));

解混淆：
window['_$qF'] = CryptoJS['enc']['Utf8']['parse'](window['btoa'](window['_$is']).slice(0, 16))
```

现在只要找出 `window['_$is']` 即可，`window['_$is']` 就是 `m` 参数，`2.2` 章节已经给出。

## 3. 最终代码

### 3.1 本地 js 调试

由于 `_0x474032` 函数调用层级较深，所以直接复制核心 js 代码进行修改。

代码文件：

`猿人学Web端爬虫攻防刷题平台\猿人学第5题-js混淆-乱码增强-补环境-atob\js\vmjs.js` 

浏览器运行 demo.html，内存溢出报错 `Uncaught RangeError: Maximum call stack size exceeded` ，由此可猜测循环调用导致。

定位到该处 debugger。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412101801479.png)

发现循环调用 `_0x4664b4(0x2a);` 。

解决：在循环代码执行加 return 即可。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412101805407.png)

**参考 demo.html 文件。**

### 3.2  nodejs 调试

先用 v_jstools 把环境补上，然后再复制核心 js 代码。

**参考 nodejs.js 文件。**

执行 nodejs.js 文件，发现报错：

```
this['PjZnKb']['push'](Math['round'](Math['random']())),RangeError: Invalid array length ...
```

先定位到报错的位置。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111631199.png)

逐步往上找，最后找到 `this['AhDApm']` 处，然后断点。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111632289.png)

发现 `_0x288d50` 的值为 0。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111637508.png)

发现是正则反爬，修改成：`this['AQfoSf'] = function() {return 'newState';},`

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111701699.png)

重新执行，发现没响应，打开调试，发现有正则匹配，在该处内存溢出了。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111705446.png)

修改 `return !_0x1249bc['test'](_0x12f2b6);` => `return false;` 。

重新执行，又是无响应，调试发现是循环执行导致内存溢出。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111727087.png)

注释掉这段代码。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111728250.png)

**补充：**下面的 `_0x4e96b4...` 也要注释掉。

```js
// _0x4e96b4[_$UH[0x1a]](function() {
//     _0x4664b4(0x1f1);
// }, 0x1f4);
// _0x4664b4(0x8);
```

重新执行，这次可以获取参数了，但是还有个错误，虽然不影响程序运行。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111730612.png)

继续调试，发现是正则反爬，修改成：`this['ZEfZEh'] = function() {return 'newState';},`

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111732659.png)

重新执行，又又又无响应，打开调试，最后定位到该处。

![](https://gitee.com/zloooong/image_store/raw/master/img/202412111743828.png)

修改 `return !_0x932324['test'](_0x43e7b7);` => `return false;` 。

重新执行，这次正常输出无错误。

## 其他

疑惑：

监听 `_0x3180ec` 变量，发现执行函数时 `_0x3180ec` 变回正常函数，执行函数后由变回 `“别调试了，你到这里就已经走错路了，哈哈哈哈”` ，这个反爬是什么做的？难道是 hook 函数调用时把  `_0x3180ec` 变回正常函数？

## 参考：

- xx
