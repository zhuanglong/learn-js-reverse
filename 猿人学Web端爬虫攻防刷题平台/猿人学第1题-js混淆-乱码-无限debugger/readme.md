hook `f` 函数
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

参考：
- https://blog.csdn.net/Learner_HJ/article/details/142784690?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogOpenSearchComplete%7ERate-2-142784690-blog-142830898.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogOpenSearchComplete%7ERate-2-142784690-blog-142830898.235%5Ev43%5Epc_blog_bottom_relevance_base1&utm_relevant_index=3
