---
title: JS、Jquery的class样式相关操作方法总结
tags:
  - JavaScript
  - Jquery
date: 2018-10-11
sidebarDepth: 5
---
# JS、Jquery的class样式相关操作方法总结
## JavaScript原生类样式操作
原生的方法比较简单，因为只有一个`className`来操作。首先获取`DOM`对象，其次使用`className`属性来获取类，获取到的是字符串，**所以对类的操作就是对字符串的操作。**

### 获取类名
```js
var obj = document.getElementById("example");
var name = obj.className;
console.log(name)  //"add"
```
### 添加类名
```js
var obj = document.getElementById("example");  //'add'
obj.className += " done hello"; //记得前面要用空格隔开，可以添加单个或者多个
console.log(obj.className)  //"add done hello"
```
### 替换类名
（这个比较适用于操作单个类名）
```js
var obj = document.getElementById("example");
//obj.className --> 'add hello'
obj.className = obj.className.replace("add","done"); //替换指定类  'done hello'
obj.className = "done";  //清空所有类用done替换  'done'
```
### 删除类名
```js
var obj = document.getElementById("example");  //'add done'
obj.className = obj.className.replace("add","");  //删除指定类  ' done'
obj.className = "";  //删除所有类  ''
```
## jquery的class样式相关操作方法
### 使用attr获取和设置样式
因为`class`是`html`标签中的一个属性，所以可以根据`attr()`获取样式，也可以设置样式值。

#### 获取样式

**方法**
> $div.attr("class");

**栗子**
```js
$("#example").attr("class");

//输出：add done
```

![](/assets/images/basic/js0.png)


#### 设置样式
当然一开始也可以根据`addClass()`设置样式值。我觉得`attr`去设置样式存在的必要性，是在于**当不确定现在这个标签中有什么类的时候，要修改成特定的类就可以直接覆盖。**

**方法1**
> $div.attr("class","done");

**栗子**
```js
$("#example").attr("class","done");
```

![](/assets/images/basic/js1.png)

**如果要设置多个类，那么中间使用空格即可。**

**方法2**
> $div.attr("class","hi hello");

**栗子**
```js
$div.attr("class","hi hello");
```

![](/assets/images/basic/js2.png)

### 添加样式
添加类可以称之为追加类，因为不会覆盖原来的类，只是在原来的基础上添加新类。

> **追加的类有以下两个特性：**
> 1. 如果添加多个`class`，那么对样式进行合并显示
> 2. 如果不同的`class`添加了同一样式属性，后者覆盖前者。

#### 添加单个样式
**方法**

> $div.addClass(类名)

**栗子**

```js
$("#example").addClass("done");
```

![](/assets/images/basic/js3.png)

#### 添加多个样式
**方法**
> $div.addClass(类名1 类名2 ...)
参数多个类名中间空格隔开， 或者
> $div.addClass(类名1).addClass(类名2)

**栗子**
```js
$("#example").addClass("done hide");
// or
$("#example").addClass("done").addClass("hide");
```

![](/assets/images/basic/js4.png)


### 删除样式
#### 删除单个样式
**方法**
> $div.removeClass(类名)

**栗子**
```js
$("#example").removeClass("done");
```

![](/assets/images/basic/js5.png)

#### 删除多个样式
**方法**
> $div.removeClass(类名1 类名2)
>
> or
>
> $div.removeClass(类名1).removeClass(类名2)

**栗子**
```js
$("#example").removeClass("done hide");
or
$("#example").removeClass("done").removeClass("hide");
```

![](/assets/images/basic/js6.png)


#### 删除所有样式
**方法**
> $div.removeClass()<br/>
> 不加参数

**栗子**
```
$("#example").removeClass();
```

![](/assets/images/basic/js7.png)

### 切换样式
总的来说是`toggleClass()`，但是里面的参数略有不同。

#### 形式1
> $div.toggleClass("类名1 类名2",[true/false])
> 1. 前面的那个参数是要切换的类名，可以是单个，也可以是空格隔开的多个。
> 2. 后面的那个参数是可选的，如果填写了`true`，与这个`div`执行`addClass()`的效果相同。
> 3. 如果填写了`false`，与这个`div`执行`removeClass()`的效果相同。

**栗子1**
```js
$("#example").toggleClass("done hello");
```

![](/assets/images/basic/js8.png)

**栗子2**
```js
$("#example").toggleClass("done",true);
//相当于addClass("done");
$("#example").toggleClass("done",false);
//相当于removeClass("done");
```

![](/assets/images/basic/js9.png)

#### 形式2
> $div.toggleClass(function(index,className){ return toggleClass},[true/false])
> 1. 前面是一个函数，第一个参数是序号，从`0`开始，第二个参数是对应的类的名字。
> 2. 此函数必须返回需要切换的类名，否则会报错。
> 2. 后面的那个参数是可选的，如果填写了`true`，与这个`div`执行`addClass()`的效果相同。
> 3. 如果填写了`false`，与这个`div`执行`removeClass()`的效果相同。

**栗子1**
```js
$("#example").toggleClass(function(index,className){
    //如果没有done类的时候
    if(className == 'add'){
        $(this).prev().css("color","yellow");
        return "done";
    //如果有done类的时候
    }else{
        $(this).prev().css("color","white");
        return "done";
    }
});
```

![](/assets/images/basic/js10.png)

**栗子2**
```js
$("#example").toggleClass(function(index,className){
    //相当于addClass();
},true);

$("#example").toggleClass(function(index,className){
    //相当于removeClass();
},false);
```


### 判断样式
下面的方法1和方法2的效果相似，方法1中的`is`不仅仅可以判断样式，而方法2中的`hasClass`是专门判断样式的。

**方法1**
> $div.is(".类名")
>
> 返回`boolean`值: `true`存在 / `false`不存在

**栗子**
```js
$("#example").is(".add");  //记得前面要加.
```


**方法2**
> $div.hasClass(类名)
>
> 返回`boolean`值: `true`存在 / `false`不存在<br/>
> 里面不加类名的时候默认为`false`:<br/>
> `$("#example").hasClass()  --> false`

**栗子**

```js
<div class="add" id="example"></div>

$("#example").hasClass("done");
// false
$("#example").hasClass("add");
// true
```

基本上`zepto`和`jquery`在关于`class`样式操作方面，并没有什么区别。

