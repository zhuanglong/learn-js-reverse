## 1. 请求调用堆栈

从该处断点。

![](https://gitee.com/zloooong/image_store/raw/master/img/202411211348717.png)

## 2. `hex_md5` 加密

复制该文件并扣下 `hex_md5` 加密相关代码。

## 3. pthon 代码逻辑

找出0-9数字图片对应的 base64。

```python
# 用于存储每张图片对应的数字，每一个相同数字图片的 base64 编码一致
number_dict = {
    'iVBORw0K...': '0',
    'iVBORw0K...': '1',
    'iVBORw0K...': '2',
    'iVBORw0K...': '3',
    'iVBORw0K...': '4',
    'iVBORw0K...': '5',
    'iVBORw0K...': '6',
    'iVBORw0K...': '7',
    'iVBORw0K...': '8',
    'iVBORw0K...': '9',
}
```

具体查看代码。

参考：

- https://aaliuq.github.io/2022/11/11/%E7%8C%BF%E4%BA%BA%E5%AD%A6%E7%AC%AC%E5%9B%9B%E9%A2%98%E5%9B%BE%E7%89%87%E6%A0%B7%E5%BC%8F%E5%B9%B2%E6%89%B0%E5%92%8C%E5%81%8F%E7%A7%BB%E5%80%BC%E5%8A%A0%E5%AF%86%E8%A7%A3%E6%9E%90/