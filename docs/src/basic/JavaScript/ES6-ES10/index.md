---
title: ES6-ES10知识整合
tags:
  - JavaScript
  - ES6
date: 2020-11-06
sidebarDepth: 5
---
历经两个月，终于把所有的`ES6-ES10`的知识点都发布完成了，这里进行一个小的整合，以后方便查阅资料用。
这些东西打印出来A4纸也有120多页，一本小书的样子`(￣▽￣)／`。

有些东西遇到了网上查和自己整理一遍感觉还是不一样的，也希望自己可以慢慢有一种写作整理的习惯。语法是基础，还是要整体过一遍的，遇到了之后再查，心里没数都不知道从哪里查起。所以将每个部分做了个分类展示，这样查起来也好查`✧(＾＿－✿ `：

还是要对`ECMAScript`进行一下知识整理的
## ECMAScript
`ECMAScript`通常看做`JavaScript`的标准化规范，实际上`JavaScript`是`ECMAScript`的扩展语言,`ECMAScript`只是提供了最基本的语法。

每个前端人烂熟于心的公式：

::: tip 公式
JavaScript = ECMAScript + BOM + DOM
:::

## ES2015
-   `2015`年开始保持每年一个版本的迭代，并且开始按照年份命名。
-   相比于`ES5.1`的变化比较大
-   自此，标准命名规则发生变化
-   `ES6`泛指是`2015`年之后的所有新标准，特指`2015`年的`ES`版本，以后要看清楚是特指还是泛指

## 新特性的分类

-   解决原有语法上的一些问题或者不足
-   对原有语法进行增强
-   全新的对象、全新的方法、全新的功能
-   全新的数据类型和数据结构

## ES6-ES10学习版图
![ES6-ES10学习版图](/assets/images/basic/es6.png)

## 基本语法链接整合
### ES6
- [ES6（一）—— 作用域](./ES6/01ES6)
- [ES6（二）—— let 与 const](./ES6/02ES6(let))
- [ES6（三）—— 数组](./ES6/03ES6(array))
- [ES6（四）—— Class](./ES6/04ES6(class))
- [ES6（五）—— 函数](./ES6/05ES6(function))
- [ES6（六）—— Object](./ES6/06ES6(object))
- [ES6（七）—— Set & Map](./ES6/07ES6(setmap))
- [ES6（八）—— RegExp](./ES6/08ES6(regexp))
- [ES6（九）—— String](./ES6/09ES6(string))
- [ES6（十）—— Destructure（解构）](./ES6/10ES6(destructure))
- [ES6（十一）—— Promise（更优的异步编程解决方案）](./ES6/11ES6(promise))
- [ES6（十二）—— Reflect](./ES6/12ES6(reflect))
- [ES6（十三）—— Proxy](./ES6/13ES6(proxy))
- [ES6（十四）—— Generator](./ES6/14ES6(generator))
- [ES6（十五）—— Iterator](./ES6/15ES6(iterator))
- [ES6（十六）—— Modules](./ES6/16ES6(modules))
- [ES6（十七）—— Symbol](./ES6/17ES6(symbol))
### ES7
- [ES7 (一) —— includes](./ES7/01ES7includes)
- [ES7(二) —— pow](./ES7/02ES7pow)
### ES8
- [ES8(一) —— async&await](./ES8/01ES8async)
- [ES8(二) —— Object （keys、values、entries）](./ES8/02ES8object)
- [ES8(三) —— String Padding](./ES8/03ES8string)
- [ES8(四) —— Object.getOwnPropertyDescriptor()](./ES8/04ES8object)
- [ES8(五) —— 尾逗号合法](./ES8/05ES8)
### ES9
- [ES9(一) —— For await of](./ES9/01ES9forawaitof)
- [ES9(二) —— Promise.finally](./ES9/02ES9finally)
- [ES9(三) —— Object.rest.spread](./ES9/03ES9rest)
- [ES9(四) —— RegExp-dotAll...](./ES9/04ES9regexp)
- [ES9(五) —— Unicode Property Escapes](./ES9/05ES9unicode)
### ES10
- [ES10 —— stringify,flat,trimStart,matchAll,fromEntries,BigInt...](./ES10/01ES10)
