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

### 9.主流浏览器内核私有属性css前缀是什么？

- mozilla 内核 （firefox,flock 等）    -moz
- webkit  内核 （safari,chrome 等）   -webkit
- opera   内核 （opera 浏览器）        -o
- trident 内核 （ie 浏览器）           -ms

### 10.浏览器的渲染原理？

- 首先解析收到的文档，根据文档定义构建一棵 DOM 树，DOM 树是由 DOM 元素及属性节点组成的
- 然后对 CSS 进行解析，生成 CSSOM 规则树。
- 根据 DOM 树和 CSSOM 规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。
- 当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。
- 布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。

[《浏览器渲染原理》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d)
[《浏览器的渲染原理简介》](https://coolshell.cn/articles/9666.html)

[《前端必读：浏览器内部工作原理》](https://kb.cnblogs.com/page/129756/)
[《深入浅出浏览器渲染原理》](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)

### 11.说下meta标签的作用以及常用meta标签有哪些？

- `<meta>`元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
- `<meta>` 标签位于文档的头部，不包含任何内容。`<meta>`标签的属性定义了与文档相关联的名称/值对。

```html
<!-- 声明文档使用的字符编码 -->
<meta charset="utf-8">
<!-- 优先使用 IE 最新版本和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- 页面描述 -->
<meta name="description" content="不超过150个字符"/>
<!-- 页面关键词者 -->
<meta name="keywords" content=""/>
<!-- 网页作者 -->
<meta name="author" content="name, email@gmail.com"/>
<!-- 搜索引擎抓取 -->
<meta name="robots" content="index,follow"/>
<!-- 为移动设备添加 viewport -->
<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
<!-- IOS 设备 begin -->
<meta name="apple-mobile-web-app-title" content="标题">
<!-- 添加到主屏后的标题（iOS 6 新增） -->
<meta name="apple-mobile-web-app-capable" content="yes"/>
<!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL" />
<!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no"/>
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- 不让百度转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 设置页面不缓存 -->
<meta http-equiv="pragma" content="no-cache">
<!-- 设置页面不缓存 -->
<meta http-equiv="cache-control" content="no-cache">
<!-- 设置页面不缓存 -->
<meta http-equiv="expires" content="0">
```

### 12.什么是渐进增强和优雅降级？

- **渐进增强**是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
- **优雅降级**是对高版本浏览器构建完整的功能，然后再针对低版本浏览器进行兼容

### 13.说下iframe的作用及存在的问题？

- 作用：
  - 创建包含另外一个文档的内联框架（即行内框架）
- 缺点：
  - iframe 会阻塞主页面的 onload 事件。window 的 onload 事件需要在所有iframe 加载完毕后（包含里面的元素）才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 src 可以避免这种阻塞情况。
  - 搜索引擎的检索程序无法解读这种页面，不利于网页的SEO
  - iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
  - 浏览器的后退按钮失效
  - 小型的移动设备无法完全显示框架

### 14.async和defer的作用是什么？有什么区别？

- `script`标签没有`defer`或`async`，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行
- `defer`属性表示延迟执行引入的JavaScript，即这段JavaScript加载时HTML并未停止解析，这两个过程是并行的。当整个document解析完毕后再执行脚本文件，在 `DOMContentLoaded`事件触发之前完成。多个脚本按顺序执行
- `async`属性表示异步执行引入的JavaScript，与`defer`的区别在于，如果已经加载好，就会开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞。多个脚本的执行顺序无法保证。

### 15.说下你对语义化的理解？

- 用正确的标签做正确的事情
- html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析
- 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的
- 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于SEO
- 对读屏器优化，有利于无障碍阅读
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

### 16.Html5新增了哪些特性？

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加：
  - 绘图`canvas`元素
  - 音频`video`和视频`audio`元素;
  - 本地离线存储`localStorage`长期存储数据，浏览器关闭后数据不丢失;`sessionStorage`的数据在浏览器关闭后自动删除;
  - 语意化更好的内容元素，比如`article`、`footer`、`header`、`nav`、`section`
  - 表单控件，`calendar`、`date`、`time`、`email`、`url`、`search`
  - 新的技术`webworker`, `websocket`
  - 新的文档属性`document.visibilityState`

- 移除的元素有：
  - 纯表现的元素`basefont`、`big`、`center`、`font`、`s`
  - `strike`，`tt`、`u`
  - 对可用性产生负面影响的元素`frame`、`frameset`、`noframes`

### 17.如何处理 HTML5 新标签的浏览器兼容问题？

- IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。
- 使用成熟的框架如`html5shiv`：
```html
<!--[if lt IE 9]>
  <script> src="https://cdn.jsdelivr.net/npm/html5shiv/dist/html5shiv.min.js"</script>
<![endif]-->
```
`[if lte IE 9]……[endif]`判断IE的版本，限定只有IE9以下浏览器版本需要执行的语句。

### 18.iframe有什么优缺点？

- 优点：
  - iframe允许将其他Web文档嵌入到当前文档中
  - 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷
  - 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用
  - 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决
- 缺点：
  - iframe会阻塞主页面的onload事件
  - iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
  - iframe的内容无法被一些搜索引擎索引到，不利于SEO
  - 很多的移动设备无法完全显示框架，设备兼容性差
  - 存在[单击劫持](https://en.wikipedia.org/wiki/Clickjacking)等常见的安全隐患

推荐阅读:
  - [《从对象到iframe - 其他嵌入技术》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3)
  - [《Web前端之iframe详解》](https://www.cnblogs.com/hq233/p/9849939.html)

## 参考

- https://juejin.cn/post/6961222829979697165