## hook `f` 函数

```js
Object.defineProperty(window, 'f', {
   set: function(val) {
            console.log('f的值:', val);
           	debugger
            return val;
        }
    }
)
```

## `window['f']` 来源

`window['f']` 在 `VM65326` 中，是动态生成的脚步，由源码 `eval(atob(window ...` 动态生成。

```
atob() 方法用于解码使用 base-64 编码的字符串
base-64 编码使用方法是 btoa()
```

![](https://gitee.com/zloooong/image_store/raw/master/img/202410241346922.png)


参考：

- https://github.com/luzhisheng/js_reverse/tree/master/%E7%8C%BF%E4%BA%BA%E5%AD%A6Web%E7%AB%AF%E7%88%AC%E8%99%AB%E6%94%BB%E9%98%B2%E5%88%B7%E9%A2%98%E5%B9%B3%E5%8F%B0/%E7%8C%BF%E4%BA%BA%E5%AD%A6%E7%AC%AC1%E9%A2%98-js%E6%B7%B7%E6%B7%86-%E4%B9%B1%E7%A0%81-%E6%97%A0%E9%99%90debugger
- https://blog.csdn.net/Learner_HJ/article/details/142784690?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogOpenSearchComplete%7ERate-2-142784690-blog-142830898.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogOpenSearchComplete%7ERate-2-142784690-blog-142830898.235%5Ev43%5Epc_blog_bottom_relevance_base1&utm_relevant_index=3
