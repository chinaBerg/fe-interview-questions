# CSS

## 目录
[[toc]]

### 说说CSS的盒模型？

- CSS盒模型本质是一个元素盒子，由内容`content`、内边距`padding`、边框`border`、margin`外边距`组成
- 分为**W3C标准盒模型**和**IE怪异盒模型**

### 什么是BFC？

BFC（块式格式化上下文），具有BFC特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性

- 产生BFC的情景：
  - body 根元素
  - 浮动元素：float 除 none 以外的值
  - 绝对定位元素：position (absolute、fixed)
  - display 为 inline-block、table-cells、flex
  - overflow 除了 visible 以外的值 (hidden、auto、scroll)
- BFC特点：
  - 内部块级盒子垂直方向排列
  - 盒子垂直距离由margin 决定，同一个BFC 盒子的外边距会重叠
  - BFC 就是一个隔离的容器，内部子元素不会影响到外部元素
  - BFC 的区域不会与float box叠加
  - 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC 的用途
  - 清除浮动
  - 解决外边距合并
  - 布局

### CSS 选择符有哪些？

```css
/* id选择器 */
#id-name {}

/* 类选择器 */
.classname {}

/* 标签选择器 */
div {}
h3 {}
p {}
span {}

/* 后代选择器 */
div span {}

/* 直接子元素选择器 */
ul > li {}

/* 兄弟选择器 */
li ~ a {}

/* 相邻兄弟选择器 */
li + a {}

/* 属性选择器 */
a[rel="external"] {}

/* 伪类选择器 */
a:hover,li:nth-child {}

/* 伪元素选择器 */
::before {}
::after {}

/* 通配符选择器 */
* {}
```

### 什么是伪类和伪元素？

> CSS伪类是用来添加一些选择器的特殊效果
> 伪类是基于元素的特征而不是他们的id、class、属性或者内容。由于状态的变化是非静态的，所以元素达到一个特定状态时，它可能得到一个伪类的样式，所以它是基于文档之外的抽象。

- 伪类以1个冒号`:`作为前缀，被添加到一个选择器末尾的关键字，例如：`:active` `:hover` `:link` `:visited`

> 伪元素是创造DOM之外的对象
> 伪元素可以为一些在源文档中不存在的内容分配样式。
> 伪元素的内容实际上和普通DOM元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

- 伪元素以2个冒号`::`作为前缀，被添加到一个选择器末尾的关键字，例如`::before` 或者 `::after`

总结：
- 伪类的受体是文档树中已有的元素，而伪元素则创立了一个DOM外的元素
- 伪类用于添加元素的特殊效果，而伪元素则是添加元素的内容
- 伪类使用一个冒号（例如:hover），css3标准伪元素使用两个冒号（例如::before)，css2中的没有区分伪类和伪元素的用法，因此css2中伪元素也可以使用一个冒号。
- PC端更推荐单冒号写法，移动端更推荐双冒号写法
- before/after伪元素需要配合content属性使用
- 伪类更常用于一些简单的动画或交互的样式，例如滑入滑出等，而伪元素更常用于字体图标、清除浮动等

### CSS 优先级算法如何计算？

CSS的优先级是根据样式声明的特殊性值来判断的。选择器的特殊性值分为四个等级，如下：
- 标签内选择符`x,0,0,0`
- ID选择符`0,x,0,0`
- class选择符/属性选择符/伪类选择符	`0,0,x,0`
- 元素和伪元素选择符`0,0,0,x`

计算方法：
- 每个等级的初始值为`0`
- 每个等级的叠加为选择器出现的次数相加
- 不可进位，比如`0,99,99,99`
- 依次表示为：`0,0,0,0`
- 每个等级计数之间没关联
- 等级判断从左向右，如果某一位数值相同，则判断下一位数值
- 如果两个优先级相同，则最后出现的优先级高，`!important`也适用
- 通配符选择器的特殊性值为：`0,0,0,0`
- 继承样式优先级最低，通配符样式优先级高于继承样式
- `!important`（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为`1,0,0,0,0`。

计算实例：
- `#demo a{color: orange;} /*特殊性值：0,1,0,1*/`
- `div#demo a{color: red;} /*特殊性值：0,1,0,2*/`

注意：
- 样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。
- 特殊性值越大的声明优先级越高。
- 相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）
- 部分浏览器由于字节溢出问题出现的进位表现不做考虑

### 如何实现一个元素水平垂直居中？

- 方法1 已知元素宽高：父元素相对定位，子元素绝对定位。设置子元素`left` `top` `right` `bottom`都为`0`, 外边距设置为`auto`;

```css
.parent {
  position: relative;
  width:  300px;
  height: 300px;
}
.child {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  margin: auto;
}
```

- 方法2 已知元素宽高：父元素相对定位，子元素绝对定位。设置子元素`left` `top` 都为`50%`, `margin-left``margin-top`外边距设置为**负的宽高的一半**;

```css
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: -50px;
}
```

- 方法3 未知元素宽高：父元素相对定位，子元素绝对定位。设置子元素的`left` `right` 都为`50%`，通过css平移属性向左和向上平移平移自身宽高的一半`transform: translate(-50%, -50%);`

```css
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
}
```

- 方法4 通过弹性盒属性设置在主轴和侧轴上居中对齐

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

- 方法5 兼容IE8可以使用table相关属性

```css
.parent {
  display: table;
  text-align: center;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
}
.parent .child {
  display: table-cell;
  vertical-align: middle;
}
.parent .child span {
  /* span会水平垂直巨中 */
}
```

- 方法6 通过最新的网格布局来实现

```css
.parent {
  display: grid;
  align-items: center;
  justify-content: center;
}
```

- 方法7 单行文字，设置行高等于自身高度，文本设置居中

```css
.parent {
  height: 22px;
  line-height: 22px;
  text-align: center;
}
```

### 说下你对position属性的理解？

- `position`属性主要用于定位，主要有如下几个值：
  - `relative`生成相对定位的元素，相对于其元素本身所在正常位置进行定位。
  - `absolute`生成绝对定位的元素，相对于值不为static的第一个父元素的`padding box`进行定位
  - fixed（老IE不支持）生成固定定位的元素，相对于浏览器窗口进行定位。如果遇到父级元素有transform等属性，则会相对于父级元素定位
  - `static`默认值，没有定位
  - `inherit`规定从父元素继承`position`属性的值

### 如何使用css实现一个三角形？

将一个div的宽度和高度设置为0，然后设置边框样式。

```css
.triangle{
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top-color: black ;
}
```

### 如何使用css实现等宽布局？

```css
.parent {
  display: flex;
}
.child {
  flex: 1;
}
```

### 如何使用css实现3栏布局（圣杯布局和双飞燕布局）？

- 圣杯布局是三列布局的一种实现，特点在于主体部分的dom放在前面优先加载。实现：
```css
.container {
  padding-left: 220px;//为左右栏腾出空间
  padding-right: 220px;
}
.left {
  float: left;
  width: 200px;
  height: 400px;
  background: red;
  margin-left: -100%;
  position: relative;
  left: -220px;
}
.center {
  float: left;
  width: 100%;
  height: 500px;
  background: yellow;
}
.right {
  float: left;
  width: 200px;
  height: 400px;
  background: blue;
  margin-left: -200px;
  position: relative;
  right: -220px;
}

<article class="container">
  <div class="center">
    <h2>圣杯布局</h2>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</article>
```

- 双飞翼布局,同样也是三栏布局，在圣杯布局基础上进一步优化，解决了圣杯布局错乱问题，实现了内容与布局的分离。而且任何一栏都可以是最高栏，不会出问题:

```css
.container {
  min-width: 600px;//确保中间内容可以显示出来，两倍left宽+right宽
}
.left {
  float: left;
  width: 200px;
  height: 400px;
  background: red;
  margin-left: -100%;
}
.center {
  float: left;
  width: 100%;
  height: 500px;
  background: yellow;
}
.center .inner {
  margin: 0 200px; //新增部分
}
.right {
  float: left;
  width: 200px;
  height: 400px;
  background: blue;
  margin-left: -200px;
}

<article class="container">
  <div class="center">
    <div class="inner">双飞翼布局</div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</article>
```

### 如何使用css实现左侧定宽，右侧自适应铺满剩余空间的布局？

- 利用弹性盒模型实现：
  - 父元素设置弹性盒属性`display: flex;`
  - 左侧div通过width固定死宽度
  - 右侧的div通过`flex: 1;`

```css
.parent {
  display: flex;
}
.left {
  width: 200px;
}
.right: {
  flex: 1;
}
```

- 利用浮动：
  - 左侧元素固定宽度，并且设置左浮动
  - 右侧元素设置margin-left的值为左侧元素的宽度

```css
* {
  box-sizing: border-box;
}
.left {
  float: left;
  width: 200px;
  border: 1px solid #333;
}
.right {
  margin-left:200px;
  border: 1px solid #333;
}
```

- 利用定位加外边距
  - 父元素设置相对定位
  - 左侧子元素设置绝对定位，left设置为0
  - 右侧子元素设置margin-left的值为左侧元素的宽度

```css
.parent {
  position: relative;
}
.left{
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  border: 1px solid #333;
  background: #aaa;
}
.right {
  margin-left:200px;
  border: 1px solid #333;
  background: #ccc;
}
```

- 绝对定位（不建议该方式，失去了dom的流的特性）
  - 父元素设置相对定位
  - 左右子元素都通过定位实现

- 通过浮动和`calc`计算属性
  - 左侧div设置固定宽度，并且设置左浮动
  - 右侧div宽度利用`calc`属性设置父元素宽度减去左侧div的宽度，并且设置右浮动
  - 注意去浮动

```css
.left{
  float: left;
  width: 200px;
  background: #aaa;
}
.right{
  float: right;
  width: calc(100% - 200px);
  background: #ccc;
}
```

参考[CSS布局 -- 左侧定宽，右侧自适应](https://www.cnblogs.com/imwtr/p/4440475.html)

### 如何使用css实现一个九宫格？

参考[《css布局 - 九宫格布局的方法汇总》](https://www.cnblogs.com/padding1015/p/9566443.html)

### 如何使用css实现等高布局？

参考[《CSS等高布局的7种方式》](https://www.cnblogs.com/xiaohuochai/p/5457127.html)

### 如何使用css实现一个未知宽度的正方形？

参考[《纯CSS实现正方形、自适应正方形方法》](https://blog.csdn.net/ztj771299799/article/details/79806769)

### 说下浮动的作用以及如何去除浮动？

float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。去除浮动的方法：

- 方法1，利用clear属性
  - 浮动元素尾部添加一个div设置类名为`clear`
  - 定义全局公用去除浮动定类名`.clear { clear: both; }`

- 方法2，父元素添加`clearfix`类名

```css
.clearfix::after {
  display: block;
  content: "";
  clear: both;
  visibility: hidden;
  height: 0;
}
```

- 方法3，直接给父元素定死高度

- 方法4，直接给父元素设置`overflow: hidden;`

### 手机端如何适配？

参考[《移动端适配方案》](https://zhuanlan.zhihu.com/p/101432990)
参考[《移动端的3种适配方法》](https://segmentfault.com/a/1190000019677612)

### 如何自定义css滚动条效果？

参考[《CSS3自定义滚动条样式》](https://www.cnblogs.com/ranyonsue/p/9487599.html)
参考[《如何自定义CSS滚动条的样式？》](https://segmentfault.com/a/1190000017142511)

### 如何实现一条0.5px宽度的线？

- 方法1，采用meta viewport的方式
viewport只针对于移动端，只在移动端上才能看到效果。

```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

- 方法2，采用transform: scale()的方式
```css
transform: scale(0.5,0.5);
```
### 如何实现单行/多行文本溢出省略？

- 单行文本溢出

```css
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

- 多行文本溢出

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

## 参考

- https://juejin.cn/post/6844903811383820302
- https://github.com/CavsZhouyou/Front-End-Interview-Notebook/blob/master/Css/Css.md