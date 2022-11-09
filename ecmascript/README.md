![鲤鱼王](C:\Users\yif90s\Pictures\Avator\鲤鱼王.png)

# ECMAScript

1. increment feature of ES6

    [最全的—— ES6有哪些新特性？ - 掘金 (juejin.cn)](https://juejin.cn/post/7092965421740982303) 

   @see also: `Symbol.toPrimitive` `Symbol.speices` `Symbol.iterator`

   @see also:  [JavaScript ES7 Function Bind Syntax – Jeremy Fairbank Blog](http://blog.jeremyfairbank.com/javascript/javascript-es7-function-bind-syntax/) 

2. asynchronous loading of `<script>`

   *JavaScript Advanced Programming Design Ch.1* `async` `defer`

    [脚本：async，defer (javascript.info)](https://zh.javascript.info/script-async-defer) 

   @see also: browser mechanism, lifecycle API

3. difference between keyword `var` `let` `const` 

   [execution context 执行上下文，Lexical Environment 词法环境, hoisting 变量提升](https://github.com/logan70/Blog/issues/2)

4. features/functions of `Array` `Object` `Function` in ES6

   *JavaScript Advanced Programming Design Ch.6*

5. difference between `complementary code` `inverse code`

     [二进制 - 一文读懂原码、反码与补码_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000021511009) 

6. basic data type in ECMA

   `string` `undefined` `null` `symbol` `bigInt` `boolean` `number`

7. `typeof NaN`

    `number`

8. method to access `undefined` securely

     [void 运算符 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void) 

9. difference between `Number.isNaN` and `isNaN`

      [Confusion between isNaN and Number.isNaN in javascript - Stack Overflow](https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript) 

10. methods to distinguish data type

   `typeof` `instanceOf` `Object.prototype.toString.call` `constructor(proto)`

   @see also: `Array.isArray()` `Object.is`

11. difference/divergence between `undefined` && `null`

12. difference between `==` && `===`

13. difference between `for in` and `for of`

       *JavaScript Advanced Programming Design Ch.3*

14. difference between Deep Clone && Shallow Clone

     [面试官：深拷贝浅拷贝的区别？如何实现一个深拷贝？ · Issue #56 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/56) 

15. IEEE-754, `Number.MAX_VALUE` `Number.MAX_SAFE_INTEGER` `Number.EPSILON`

      `2 ** 1023 * (parseInt('1'.repeat(53), 2) * 2 ** -52) == Number.MAX_VALUE`

16. difference between encoding styles UCS, UTF, ASCII

       [刨根究底学编程 - 知乎 (zhihu.com)](https://www.zhihu.com/column/paogenjiudi?utm_source=com.microsoft.emmx&utm_medium=social&utm_oi=1414920246902353920) 

17. RegExp Learnings

       [Regex Learn - 正则表达式交互式课程](https://regexlearn.com/zh-cn/learn) 

18. Data Type Transformation -- Basic Data Type && Reference Data Type

       [对象 —— 原始值转换 (javascript.info)](https://zh.javascript.info/object-toprimitive) 

       [why-is-0-false](https://stackoverflow.com/questions/47015361/why-is-0-false) 

19. semi-Array definition and how to convert them

       [你真的会将类数组转化为数组吗 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904047258910728) 

20. the procedure of `new ` keyword

21. Object inheritance ways (Before After ES6)

       *JavaScript Advanced Programming Design Ch.8*  [类继承 (javascript.info)](https://zh.javascript.info/class-inheritance) 

22. difference between `Object.getPrototypeOf` `obj.prototype` `obj.__proto__`

      `Object.getPrototypeOf` have analogous usages with `obj.__proto__`

23. ways to create new `function`  instances

       *JavaScript Advanced Programming Design Ch.10*

24. Tail call optimization 

      *JavaScript Advanced Programming Design Ch.10.13.1*

25. inner mechanism of **closure** in function

    [深入JavaScript系列（三）：闭包 · Issue #3 · logan70/Blog (github.com)](https://github.com/logan70/Blog/issues/3) 

26. Memory Leaking

    [面试官：说说 JavaScript 中内存泄漏的几种情况？ · Issue #78 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/78) 

    [Memory Leaks (crockford.com)](https://www.crockford.com/javascript/memory/leak.html) 

27. arrow function

28. inner mechanism of `this` in function invoking

    [深入JavaScript系列（四）：彻底搞懂this · Issue #4 · logan70/Blog (github.com)](https://github.com/logan70/Blog/issues/4) 

    [Reference Type (javascript.info)](https://zh.javascript.info/reference-type) 

    [类继承 HomeObject (javascript.info)](https://zh.javascript.info/class-inheritance#shen-ru-nei-bu-tan-jiu-he-homeobject) 

29. inner ideology of **garbage collection**

    [垃圾回收 (javascript.info)](https://zh.javascript.info/garbage-collection) 

    [A tour of V8: Garbage Collection — jayconrod.com](https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection) 

     [javascript 垃圾回收算法了解一下 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903619720904717) 

30. generator mechanism

       *JavaScript Ninja*

31. generator termination ways

       `return` `throw` `break` *JavaScript Advanced Programming Design Ch.7*

32. Event Loop mechanism

       [深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调（动图演示） - 掘金 (juejin.cn)](https://juejin.cn/post/6844904165462769678) 

       [Event Loop的规范和实现](https://juejin.cn/post/6844903552402325511)

     [Node.js 事件循环，定时器和 process.nextTick() | Node.js (nodejs.org)](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/) 

     [Event Loop and the Big Picture — NodeJS Event Loop Part 1 | by Deepal Jayasekara | Deepal’s Blog (insiderattack.net)](https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810) 

33. `Promise` implementation

       @see also: event loop, generator

# BOM & DOM & Event Model

1. BOM object, definition, relevant making ups/buildups

    @see also: Vue router history/hash modes

2. DOM relevant traverse methods

    [Document (javascript.info)](https://zh.javascript.info/document) 

3. Event Model of DOM

     [事件简介 (javascript.info)](https://zh.javascript.info/events) 

     [EventTarget.addEventListener() - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) \

    @see also: Vue Event Processing(Modifiers), `initEvent` in `new Vue`

4. ways to visit CSS relevant properties in DOM

    `elem.styl` `document.stylesheets` `className/classList` `attribute nodes`

    `defaultView.getComputedStyle`

5. DOM element size && dimension

    @see also: [Document (javascript.info)](https://zh.javascript.info/document) 

6. Event Agent

    *JavaScript Advanced Programming Design Ch.17.5*

    @see also:  [Inside look at modern web browser (part 4) - Chrome Developers](https://developer.chrome.com/blog/inside-browser-part4/#input-events-from-the-browsers-point-of-view) 

    @see also: Web Performance Optimization

7. Debounce/Throttle

    @see also: Vue self defined directives

    @see also:  [TypeScript: Documentation - Decorators (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/decorators.html) 

# Browser relevant

1. `fetch` and `AJAX(asynchronous javascript and xml)` `XMLHttpRequest` API and their lifecycle event

   @see also: browser lifecycle

2. definition of JSON, and the usage of `JSON.stringify`

    [JSON.stringify() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 

3. definition of Cross Origin, methods to cope with it

    [跨源资源共享（CORS） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) 

   JSONP, `script`.etc

   @see also: status code(204)

   @see also: `HTTP-equiv` , <meta\>

4. ways to tackle with cross origin

    CORS, JSONP, nginx,  [window.postMessage - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 

5. Long rotation queries/short queries, Web Socket, Event Source

    [长轮询（Long polling） (javascript.info)](https://zh.javascript.info/long-polling) 

6. Web Storage API (`Cookie` `SessionStorage` `LocalStorage`)

   [Storage for the web](https://web.dev/storage-for-the-web/) 

   *JavaScript Advanced Programming Design Ch.25.1 Cookie buildups*

   @see also: CSRF/XSS attack

7. Bezier-curve

   [贝塞尔曲线 (javascript.info)](https://zh.javascript.info/bezier-curve) 

   @see also: (CSS) animation

8. Rendering pipeline of browser

   [Inside look at modern web browser (part 1) - Chrome Developers](https://developer.chrome.com/blog/inside-browser-part1/) 

   @see also: lifecycle of a page

   @see also: 从键入URL到显示页面的过程

   @see also: HTTPS

   @see also: structure of browser

9. Lifecycle of a page

   [Page Lifecycle API - Chrome Developers](https://developer.chrome.com/blog/page-lifecycle-api/) 

   @see also: rendering pipeline of browser

   @see also: 

10. how JS/CSS foil the rendering pipeline

    @see also: `visibility` `display`

11. CSRF XSS attack => definition and ways to tackle with situations

       [前端安全 - 美团技术团队 (meituan.com)](https://tech.meituan.com/tags/前端安全.html) 

      [Referrer-Policy - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy) 

     [Referrer Policy Web.DEV](https://web.dev/referrer-best-practices)

      @see also: cookie

     @see also: the understanding of Referrer policy (privacy leaking)

12. difference between CMJ && ES Module

      [聊聊什么是CommonJs和Es Module及它们的区别 - 掘金 (juejin.cn)](https://juejin.cn/post/6938581764432461854) 

     @see also: difference between Vite & Webpack

13. web performance optimization

       [Web 性能 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/Performance) 

     [Largest Contentful paint](https://web.dev/i18n/zh/lcp/)

      @see also: rendering pipeline, Vue Lazy Loading

14. difference between FCP and LCP

      [First Contentful Paint 首次内容绘制 (FCP) (web.dev)](https://web.dev/i18n/zh/fcp/#如何改进-fcp) 

      [Largest Contentful Paint 最大内容绘制 (LCP) (web.dev)](https://web.dev/i18n/zh/lcp/#如何改进-lcp) 

     @see also: web performance

15. Cache

      [彻底弄懂 Http 缓存机制 - 基于缓存策略三要素分解法](https://mp.weixin.qq.com/s/qOMO0LIdA47j3RjhbCWUEQ?)

      *HTTP authoritative guideline Ch.Cache*

      @see also: REST cache, difference between `F5` and `Ctrl+F5`, CDN

16. the understanding of CDN

       [面试官：如何理解CDN？说说实现原理？ · Issue #142 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/142) 

      @see also: DNS load balancing

17. implementation of virtual scrolling

      [Virtual scrolling](https://juejin.cn/post/6844904183582162957#heading-0)

18. implementation of lazy loading (images)

       [使用延迟加载提高加载速度 (web.dev)](https://web.dev/lazy-loading/#implementing) 

       [Lazy loading - Web performance | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) 

     @see also: web performance optimization

     @see also: largest contentful paint

# Vue

1. the lifecycle of Vue2/3

     [组合式 API：生命周期钩子 | Vue3 (vuejs.org)](https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted) 
     
2. the reactive ideology of Vue

      [深入源码理解reactive和ref - 掘金 (juejin.cn)](https://juejin.cn/post/6992976063479431175#heading-11) (Vue3)

      [Object的变化侦测 | Vue源码系列-Vue中文社区 (vue-js.com)](https://vue-js.com/learn-vue/reactive/object.html#_1-前言) (Vue2)

3. the ideology of Vue Diff

   [渲染机制 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/extras/rendering-mechanism.html) 

   [面试官：了解过vue中的diff算法吗？说说看 · Issue #24 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/24) 

   @see also: react diff

4. difference between MVC & MVP & MVVM

   [model view controller - What is the difference between MVC and MVVM? - Stack Overflow](https://stackoverflow.com/questions/667781/what-is-the-difference-between-mvc-and-mvvm) 

5. divergence between `v-if` `v-show` `v-html`

   [v-show | Vue.js (vuejs.org)](https://cn.vuejs.org/api/built-in-directives.html#v-show) 

   [v-if | Vue.js (vuejs.org)](https://cn.vuejs.org/api/built-in-directives.html#v-if) 

   [v-html | Vue.js (vuejs.org)](https://cn.vuejs.org/api/built-in-directives.html#v-html) 

   [面试官：Vue中的v-show和v-if怎么理解？ · Issue #4 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/4) 

6. the basic ideology of `v-model`

      [表单输入绑定 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/forms.html#form-input-bindings) 

7. the basic ideology of `<keep-alive>`

    [KeepAlive | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive) 

8. ways of having communications between components in Vue

     [javascript - vue组件间通信六种方式（完整版）_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000019208626) 

     simple object management

9. the usage of `nextTick`

     [[vue源码\][nextTick]原理以及源码解析 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903911673823246#heading-3) 

10. the procedure of rendering a vue instance in a page

      [生命周期篇综述 | 逐行剖析 Vue.js 源码 (nlrx-wjc.github.io)](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/lifecycle/) 

     @see also:  [渲染函数 & JSX | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/extras/render-function.html) 

11. comparision between Vue2/3

       [Vue3 对比 Vue2.x 差异性、注意点、整体梳理，与React hook比又如何？（面试热点） - 掘金 (juejin.cn)](https://juejin.cn/post/6892295955844956167) 

12. understanding of SSR (server side rendering)

       [服务端渲染 (SSR) | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/scaling-up/ssr.html) 

13. optimization of vue application performance

       [性能优化 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/best-practices/performance.html) 

      @see also: `file://./article/optimization`

# Vue Suits

1. difference between VueX and Pinia

     [前端 - Pinia与Vuex的对比：Pinia是Vuex的良好替代品吗？_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000040368602) 

2. basic ideology of VueX

   

3. lazy load of Vue Router

     [路由懒加载 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html) 

4. comparision between hash/history Mode

     [不同的历史模式 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/history-mode.html) 

    @see also: BOM history object

5. life cycle of Vue Router

     [导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html) 

# Webpack / Vite

1. steps of using webpack to build modules

2. vue loader

     [介绍 | Vue Loader (vuejs.org)](https://vue-loader.vuejs.org/zh/) 





