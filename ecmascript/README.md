# ECMAScript

1. increment feature of ES6

    [最全的—— ES6有哪些新特性？ - 掘金 (juejin.cn)](https://juejin.cn/post/7092965421740982303) 

2. asynchronous loading of `<script>`

   *JavaScript Advanced Programming Design Ch.1* `async` `defer`

    [脚本：async，defer (javascript.info)](https://zh.javascript.info/script-async-defer) 

   @see also: browser mechanism, lifecycle API

3. difference between keyword `var` `let` `const`

   [execution context 执行上下文，Lexical Environment 词法环境, hoisting 变量提升]( [深入JavaScript系列（二）：执行上下文 · Issue #2 · logan70/Blog (github.com)](https://github.com/logan70/Blog/issues/2) )

4. features/functions of `Array` `Object` `Function` in ES6

   *JavaScript Advanced Programming Design Ch.6*

5. basic data type in ECMA

   `string` `undefined` `null` `symbol` `bigInt` `boolean` `number`

6. `typeof NaN`

7. methods to distinguish data type

   `typeof` `instanceOf` `Object.prototype.toString.call` `constructor(proto)`

8. difference between `undefined` && `null`

9. difference between `==` && `===`

10. difference between Deep Clone && Shallow Clone

     [面试官：深拷贝浅拷贝的区别？如何实现一个深拷贝？ · Issue #56 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/56) 

11. IEEE-754, `Number.MAX_VALUE` `Number.MAX_SAFE_INTEGER` `Number.EPSILON`

    `2 ** 1023 * (parseInt('1'.repeat(53), 2) * 2 ** -52) == Number.MAX_VALUE`

12. difference between encoding styles UCS, UTF, ASCII

     [刨根究底学编程 - 知乎 (zhihu.com)](https://www.zhihu.com/column/paogenjiudi?utm_source=com.microsoft.emmx&utm_medium=social&utm_oi=1414920246902353920) 

13. RegExp Learning

     [Regex Learn - 正则表达式交互式课程](https://regexlearn.com/zh-cn/learn) 

14. Data Type Transformation -- Basic Data Type && Reference Data Type

      [对象 —— 原始值转换 (javascript.info)](https://zh.javascript.info/object-toprimitive) 

15. semi-Array definition and how to convert them

      [javascript 类数组_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000000415572) 

16. the procedure of `new ` keyword

17. Object inheritance ways (Before After ES6)

     *JavaScript Advanced Programming Design Ch.8*  [类继承 (javascript.info)](https://zh.javascript.info/class-inheritance) 

18. ways to create new `function`  instances

     *JavaScript Advanced Programming Design Ch.10*

19. Tail call optimization 

20. inner mechanism of **closure** in function

      [深入JavaScript系列（三）：闭包 · Issue #3 · logan70/Blog (github.com)](https://github.com/logan70/Blog/issues/3) 

21. Memory Leaking

      [面试官：说说 JavaScript 中内存泄漏的几种情况？ · Issue #78 · febobo/web-interview (github.com)](https://github.com/febobo/web-interview/issues/78) 

      [Memory Leaks (crockford.com)](https://www.crockford.com/javascript/memory/leak.html) 

22. arrow function

23. inner mechanism of `this` in function invoking

      [深入JavaScript系列（四）：彻底搞懂this · Issue #4 · logan70/Blog (github.com)](https://github.com/logan70/Blog/issues/4) 

      [Reference Type (javascript.info)](https://zh.javascript.info/reference-type) 

       [类继承 HomeObject (javascript.info)](https://zh.javascript.info/class-inheritance#shen-ru-nei-bu-tan-jiu-he-homeobject) 

24. inner ideology of **garbage collection**

      [垃圾回收 (javascript.info)](https://zh.javascript.info/garbage-collection) 

      [A tour of V8: Garbage Collection — jayconrod.com](https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection) 

25. generator mechanism

     *JavaScript Ninja*

26. generator termination ways

     `return` `throw` `break` *JavaScript Advanced Programming Design Ch.7*

27. Event Loop mechanism

     [深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调（动图演示） - 掘金 (juejin.cn)](https://juejin.cn/post/6844904165462769678) 

     [Event Loop的规范和实现](https://juejin.cn/post/6844903552402325511)

28. `Promise` implementation

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

2. definition of Cross Origin, methods to cope with it

    [跨源资源共享（CORS） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) 

   JSONP, `script`.etc

   @see also: status code(204)

   @see also: `HTTP-equiv` , <meta\>

3. Long rotation queries/short queries, Web Socket, Event Source

    [长轮询（Long polling） (javascript.info)](https://zh.javascript.info/long-polling) 

4. Web Storage API (`Cookie` `SessionStorage` `LocalStorage`)

    [Storage for the web](https://web.dev/storage-for-the-web/) 

   *JavaScript Advanced Programming Design Ch.25.1 Cookie buildups*

   @see also: CSRF/XSS attack

5. Bezier-curve

    [贝塞尔曲线 (javascript.info)](https://zh.javascript.info/bezier-curve) 

   @see also: (CSS) animation

6. Rendering pipeline of browser

    [Inside look at modern web browser (part 1) - Chrome Developers](https://developer.chrome.com/blog/inside-browser-part1/) 

   @see also: lifecycle of a page

   @see also: 从键入URL到显示页面的过程

   @see also: HTTPS

7. CSRF XSS attack => definition and ways to tackle with situations

    [前端安全 - 美团技术团队 (meituan.com)](https://tech.meituan.com/tags/前端安全.html) 

   @see also: cookie

8. difference between CMJ && ES Module

    [聊聊什么是CommonJs和Es Module及它们的区别 - 掘金 (juejin.cn)](https://juejin.cn/post/6938581764432461854) 

   @see also: difference between Vite & Webpack

9. web performance optimization

    [Web 性能 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/Performance) 

   @see also: rendering pipeline, Vue Lazy Loading