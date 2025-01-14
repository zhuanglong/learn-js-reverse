## 知识点

字体编辑器

```
http://font.qqe2.com/
```

Python | fontTools的使用

```
https://zhuanlan.zhihu.com/p/350807659
```

Python爬虫---刷新你的认知，字体反爬并没有那么简单

```
https://zhuanlan.zhihu.com/p/99497149
```

## 1. 抓包

可以看出 woff 应该是字体编码，**"&#xa498 &#xc172 &#xb971 &#xa498 "** 是加密的数字，对应的是胜点 **2342**。

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141658704.png)

## 2.动态字体文件

请求接口成功会动态加载字体。

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141727223.png)

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141727675.png)

把字体下载名改为 `字体文件.ttf` ，在 `http://font.qqe2.com/` 打开如下：

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141727117.png)

每个 `unixxxx` 编码都有相对应的数字。

## 3. 解析字体编码

由于每次请求返回的都是动态字体，所以 `unixxxx` 对应的数字是不一样的。

通过阅读 https://zhuanlan.zhihu.com/p/99497149 文章得知，虽然 `unixxxx` 对应的数字是不一样，但是 TTGlyph 节点下的 on 属性值是一样的；

所以我们只要把 TTGlyph 节点的 on 数字拼接，

```
<TTGlyph name="unib182" xMin="46" yMin="0" xMax="562" yMax="707">
  <contour>
    <pt x="377" y="707" on="1"/>
    <pt x="46" y="251" on="1"/>
    <pt x="46" y="177" on="1"/>
    <pt x="400" y="177" on="1"/>
    <pt x="400" y="0" on="1"/>
    <pt x="472" y="0" on="1"/>
    <pt x="472" y="177" on="1"/>
    <pt x="562" y="177" on="1"/>
    <pt x="562" y="215" on="1"/>
    <pt x="472" y="215" on="1"/>
    <pt x="472" y="707" on="1"/>
  </contour>
  <contour>
    <pt x="400" y="602" on="1"/>
    <pt x="400" y="602" on="1"/>
    <pt x="400" y="215" on="1"/>
    <pt x="107" y="215" on="1"/>
  </contour>
  <instructions/>
</TTGlyph>
```

然后在该网站找到对应的数字做映射即可。

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141727117.png)

示例 font2xml.py 会打印出拼接好的 on 值：

```
[
	'10010101001110101011010101010101000100100',
	'111111111111111',
	'100110101001010101011110101000',
	'10101100101000111100010101011010100101010100',
	'1001101111',
	'10101010100001010111010101101010010101000',
	'1110101001001010110101010100101011111',
	'10100100100101010010010010',
	'101010101101010001010101101010101010010010010101001000010',
	'1111111'
]
```

例如 '111111111111111' 对应的数字是 4：

![](https://gitee.com/zloooong/image_store/raw/master/img/202501141718732.png)

映射表：

```
number_dict = {
    '10010101001110101011010101010101000100100': '9',
    '111111111111111': '4',
    '100110101001010101011110101000': '2',
    '10101100101000111100010101011010100101010100': '3',
    '1001101111': '1',
    '10101010100001010111010101101010010101000': '6',
    '1110101001001010110101010100101011111': '5',
    '10100100100101010010010010': '0',
    '101010101101010001010101101010101010010010010101001000010': '8',
    '1111111': '7',
}
```

具体代码查看 `猿人学Web端爬虫攻防刷题平台\猿人学第7题-动态字体\demo.py` 。

## 参考：

- https://github.com/luzhisheng/js_reverse/tree/master/%E7%8C%BF%E4%BA%BA%E5%AD%A6Web%E7%AB%AF%E7%88%AC%E8%99%AB%E6%94%BB%E9%98%B2%E5%88%B7%E9%A2%98%E5%B9%B3%E5%8F%B0/%E7%8C%BF%E4%BA%BA%E5%AD%A6%E7%AC%AC7%E9%A2%98-%E5%AD%97%E4%BD%93%E5%8F%8D%E7%88%AC
- https://www.cnblogs.com/zichliang/p/17452648.html

