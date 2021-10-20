# Vue
[[toc]]

## 基础篇
### 说说你对 SPA 单页面的理解，它的优缺点分别是什么？

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

优点：

- 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
- 基于上面一点，SPA 相对对服务器压力小；
- 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

- 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
- 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
- SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

### v-show 与 v-if 有什么区别？

- v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景。

- v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。v-show 则适用于需要非常频繁切换条件的场景。

### Class 与 Style 如何动态绑定？

- 对象语法：

```jsx
// class
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

data: {
  isActive: true,
  hasError: false
}

// style
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```

- 数组语法：

```jsx
// class
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}

// style
<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```

### 组件的data为什么建议写成函数？

- 数据以函数返回值形式定义，每复用一次组件，就会返回一分新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据，进行数据隔离

- 写成对象形式，所有组件实例共用了一份data数据，造成数据污染

### Vue的生命周期方法有哪些？作用是什么？

- beforeCreate： 在实例初始化之后，数据观测（data observe）和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

- created： 实例已经创建完成之后被调用。在这一步，实例已经完成以下的配置：数据观测（data observe ），属性和方法的运算，watch/event 事件回调。这里没有 `$el`，如果非要想与 DOM 进行交互，可以通过`vm.$nextTick` 来访问 DOM。

- beforeMount： 在挂载开始之前被调用：相关的 render 函数首次被调用。

- mounted： 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom节点。

- beforeUpdate： 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁 （patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

- updated： 发生在更新完成之后，当前阶段组件 Dom 已经完成更新。要注意的是避免在此期间更新数据，因为这个可能导致无限循环的更新，该钩子在服务器渲染期间不被调用。

- beforeDestroy： 实例销毁之前调用。在这一步，实力仍然完全可用。我们可以在这时进行 善后收尾工作，比如清除定时器。

- destroy：Vue实例销毁后调用。调用后，Vue实例指示的东西都会解绑定，所有的事件监听器会被移除，左右的子实例也会被销毁，该钩子在服务器端渲染不被调用。

- activated： keep-alive组件专属，组件被激活时调用

- deactivated： keep-alive组件专属，组件被销毁时调用

### Vue内置指令有哪些？

- v-once - 定义它的元素或组件只渲染一次，包括元素或组件的所有节点，首次渲染后，不再随数据的变化重新渲染，将被视为静态内容。
- v-cloak - 这个指令保持在元素上直到关联实例结束编译 -- 解决初始化慢到页面闪动的最佳实践。
- v-bind - 绑定属性，动态更新HTML元素上的属性。例如 `v-bind:class`。
- v-on - 用于监听DOM事件。例如 `v-on:click v-on:keyup`
- v-html - 赋值就是变量的innerHTML -- 注意防止xss攻击
- v-text - 更新元素的`textContent`
- v-model
  - 1、在普通标签。变成`value`和`input`的语法糖，并且会处理拼音输入法的问题。
  - 2、再组件上。也是处理`value`和`input`语法糖。
- `v-if` / `v-else` / `v-else-if`。可以配合template使用；在render函数里面就是三元表达式。
- v-show - 使用指令来实现 -- 最终会通过display来进行显示隐藏
- v-for - 循环指令编译出来的结果是 -L 代表渲染列表。优先级比v-if高最好不要一起使用，尽量使用计算属性去解决。注意增加唯一key值，不要- 使用index作为key。
- v-pre - 跳过这个元素以及子元素的编译过程，以此来加快整个项目的编译速度。

### computed和watch的区别和使用场景？

- computed
  - 计算属性，依赖其它属性计算值
  - 值有缓存，只有当计算值变化才会返回内容
  - 可以设置getter和setter。
  - 一般用在模板渲染中，某个值是依赖其它响应对象甚至是计算属性而来

- watch
  - 监听到值的变化就会执行回调，在回调中可以进行一系列的操作
  - 适用于观测某个值的变化去完成一段复杂的业务逻辑

### 虚拟DOM是什么？有什么优缺点？

由于在浏览器中操作 DOM 是很昂贵的。频繁的操作 DOM，会产生一定的性能问题。这就是虚拟 Dom 的产生原因。Vue2 的 Virtual DOM 借鉴了开源库 snabbdom 的实现。Virtual DOM 本质就是用一个原生的 JS 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。

- 优点：
    - 保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；

    - 无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；

    - 跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。

- 缺点:
    - 无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。

    - 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。

### 你都做过哪些Vue的性能优化
- 对象层级不要过深，否则性能就会差
- 不需要响应式的数据不要放到 data 中（可以用 `Object.freeze()` 冻结数据）
- `v-if` 和 `v-show` 区分使用场景
- `computed` 和 `watch` 区分使用场景
- `v-for`遍历必须加 key，key 最好是 id 值，且避免同时使用 v-if
- 大数据列表和表格性能优化-虚拟列表/虚拟表格
- 防止内部泄漏，组件销毁后把全局变量和事件销毁
- 图片懒加载
- 路由懒加载`() => import()`
- `import('module/to/path').then(() => { /** your code */})`异步加载组件
- 第三方插件的按需引入
- 适当采用`keep-alive`缓存组件
- 防抖、节流运用
- 服务端渲染 SSR or 预渲染

### Vue组件通信方式有哪些？

### Vue2双向数据绑定原理

### Vue3双向数据绑定原理

## 参考

- https://juejin.cn/post/6961222829979697165
