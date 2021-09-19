# Html(5)

## 目录
[[toc]]

### 1. 说下对Html中DOCTYPE的理解？

- 概念：
  - `DOCTYPE`是`Document Type`（文档类型）的简写
  - `<!DOCTYPE>`不是一个 HTML 标签，只是用来指定页面所使用的`XHTML`或者`HTML`的版本
  - `<!DOCTYPE>` 声明位于文档中的最前面的位置，在`<html>`标签之前
- HTML4.01基于标准通用标记语言(SGML)，`<!DOCTYPE>` 声明需引用文档类型声明（DTD）
- HTML5 不是基于 SGML，因此不要求引用 DTD。
- `<!DOCTYPE>`不存在或格式不正确会导致文档以**兼容模式**呈现
- `<!DOCTYPE>`声明方式：
  - html5 `<!DOCTYPE html>`
  - html4.01 Strict `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
  - html4.01 Transitional `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`
  - html4.01 Frameset `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`
  - xhtml1.0 Transitional `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
  - xhtml1.0 Frameset `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`
  - xhtml1.1 `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`

### 2. 标准模式与兼容模式各有什么区别？

- 标准模式的渲染方式和 JS 引擎的解析方式都是以该浏览器支持的最高标准运行
- 在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。

### 3. HTML5 为什么只需要写 <!DOCTYPE HTML>，而不需要引入 DTD？

- HTML4.01 基于 SGML ，所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。
- HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 `DOCTYPE` 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。

### 4. SGML 、 HTML 、XML 和 XHTML 的区别？

- SGML 是标准通用标记语言，是一种定义电子文档结构和描述其内容的国际标准语言，是所有电子文档标记语言的起源。
- HTML 是超文本标记语言，主要是用于规定怎么显示网页。
- XML 是可扩展标记语言是未来网页语言的发展方向，XML 和 HTML 的最大区别就在于 XML 的标签是可以自己创建的，数量无限多，而 HTML 的标签都是固定的而且数量有限。
- XHTML 也是现在基本上所有网页都在用的标记语言，他其实和 HTML 没什么本质的区别，标签都一样，用法也都一样，就是比 HTML 更严格，比如标签必须都用小写，标签都必须有闭合标签等。

### 5. DTD 介绍

- DTD（ Document Type Definition 文档类型定义）是一组机器可读的规则，它们定义 XML 或 HTML 的特定版本中所有允许元素及它们的属性和层次关系的定义。在解析网页时，浏览器将使用这些规则检查页面的有效性并且采取相应的措施。
- DTD 是对 HTML 文档的声明，还会影响浏览器的渲染模式（工作模式）。

### 6.什么是块元素和内联元素？

- Html中元素分为块元素（`block`）、内联元素（`inline`）和内联块元素（`inline-block`）
- 常见内联元素有`a b span img strong sub sup button input label select textarea`
- 常见块元素有`div p ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p`
- 内联块元素可以通过设置`display: inline-block;`css属性

### 7.页面导入样式时，使用 link 和 @import 有什么区别？

- 从属关系区别:
  - `@import`是CSS提供的语法规则，只有导入样式表的作用；
  - `link`是HTML提供的标签，不仅可以加载CSS文件，还可以定义`RSS`、`rel`连接属性、引入网站图标等
- 加载顺序区别:
  - 加载页面时`link`标签引入的 CSS 被同时加载
  - 加载页面时`@import`引入的 CSS 将在页面加载完毕后被加载
- 兼容性区别:
  - `@import`是CSS2.1才有的语法，故只可在IE5+才能识别
  - `link`标签作为 HTML 元素，不存在兼容性问题
- DOM 可控性区别:
  - 可以通过 JS 操作 DOM ，插入`link`标签来改变样式
  - 由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式

### 8.常见的浏览器内核有哪些？

- **Trident**：IE浏览器用的内核，因为在早期 IE 占有大量的市场份额，所以这种内核比较流行，以前有很多网页也是根据这个内核的标准来编写的，但是实际上这个内核对真正的网页标准支持不是很好。但是由于 IE 的高市场占有率，微软也很长时间没有更新 Trident 内核，就导致了 Trident 内核和 W3C 标准脱节。还有就是 Trident 内核的大量 Bug 等安全问题没有得到解决，加上一些专家学者公开自己认为 IE 浏览器不安全的观点，使很多用户开始转向其他浏览器。

- **Gecko**：Firefox 和 Flock浏览器所采用的内核，这个内核的优点就是功能强大、丰富，可以支持很多复杂网页效果和浏览器扩展接口，但是代价是也显而易见就是要消耗很多的资源，比如内存。

- **Presto**：Opera浏览器曾经采用的就是 Presto 内核，Presto 内核被称为公认的浏览网页速度最快的内核，这得益于它在开发时的天生优势，在处理 JS 脚本等脚本语言时，会比其他的内核快3倍左右，缺点就是为了达到很快的速度而丢掉了一部分网页兼容性。

- **Webkit**：Safari浏览器采用的内核，它的优点就是网页浏览速度较快，虽然不及 Presto 但是也胜于 Gecko 和 Trid
ent，缺点是对于网页代码的容错性不高，也就是说对网页代码的兼容性较低，会使一些编写不标准的网页无法正确显示。WebKit前身是 KDE 小组的 KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。

- **Blink**：谷歌在 Chromium Blog 上发表博客，称将与苹果的开源浏览器核心 Webkit 分道扬镳，在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。其实 Blink 引擎就是 Webkit 的一个分支，就像 webkit 是
KHTML 的分支一样。Blink 引擎现在是谷歌公司与 Opera Software 共同研发，上面提到过的，Opera 弃用了自己的 Presto内核，加入 Google 阵营，跟随谷歌一起研发 Blink。

### 9.浏览器的渲染原理？

- 首先解析收到的文档，根据文档定义构建一棵 DOM 树，DOM 树是由 DOM 元素及属性节点组成的
- 然后对 CSS 进行解析，生成 CSSOM 规则树。
- 根据 DOM 树和 CSSOM 规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。
- 当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。
- 布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。

[《浏览器渲染原理》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d)
[《浏览器的渲染原理简介》](https://coolshell.cn/articles/9666.html)

[《前端必读：浏览器内部工作原理》](https://kb.cnblogs.com/page/129756/)
[《深入浅出浏览器渲染原理》](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)


## 参考

- https://juejin.cn/post/6961222829979697165