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

### 如何使用css实现等宽布局？

### 如何使用css实现3栏布局（圣杯布局和双飞燕布局）？

### 如何使用css实现左侧定宽，右侧自动铺满剩余空间的布局？

### 如何使用css实现一个九宫格？

### 如何使用css实现等高布局？

### 如何使用css实现一个未知宽度的正方形？

### 如何实现元素水平排列？

### 说下浮动的作用以及如何去除浮动？

### 手机端如何适配？

### 如何自定义css滚动条效果？

### 如何实现一条0.5px宽度的线？

### 如何实现单行/多行文本溢出省略？

## 参考

- https://juejin.cn/post/6844903811383820302
- https://github.com/CavsZhouyou/Front-End-Interview-Notebook/blob/master/Css/Css.md