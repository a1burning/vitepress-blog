---
title: LottieJS动画的安装与使用
tags:
  - Tools
date: 2018-05-24
sidebarDepth: 5
---
# LottieJS动画的安装与使用

## Lottie动画技术原理

Lottie动画是将AE文件导出json文件，然后使用LottieJS进行动画的控制，目前动画的交互性不是很强，所以先用这种技术。

## LottieJS的特点

待更新

## LottieJS动画的安装和使用

1. 首先需要安装AE软件，这里根据UE安装了CC 2017版本（这个去搜安装包安装破解不再赘述）

2. 其次下载`bodymovin.zxp`这个AE扩展插件，用于AE动画的json文件的导出

3. 其次下载安装AE扩展插件的工具包[ZXP Installer](https://aescripts.com/learn/zxp-installer/)，这个工具包`aescript + aeplugins zxp installer.exe`可以安装很多的AE扩展插件

4. 还要下载Lottie.js，gitHub地址[**lottie-web**](https://github.com/airbnb/lottie-web) 或者 `git clone https://github.com/airbnb/lottie-web.git`

5. 在`aescript + aeplugins zxp installer.exe` 安装`bodymovin.zxp`，安装好以后会是这个样子

![ZXPinstall.jpg](/assets/images/more/tools/lottie0.png)


6. 打开AE`编辑 > 首选项 > 常规` 界面勾选`允许脚本写入文件和访问网络` ，点击确定

![AEsetting.jpg](/assets/images/more/tools/lottie1.png)


7. 在AE中点击`窗口 > 扩展 ` 中就可以看到添加的插件

![ZXPcheck.png](/assets/images/more/tools/lottie2.png)


8. 下一步就是准备动画了，一个aep文件加上素材文件，打开之后在`窗口 > 扩展` 中打开bodymovin窗口，可以看到下面的窗口

![randerWindow.jpg](/assets/images/more/tools/lottie3.png)

![bodymovinDone.jpg](/assets/images/more/tools/lottie4.png)

:::warning tips
以前有遇到过导出卡住的情况，后面考虑到可能是插件和AE版本不匹配的原因，如果你有这种原因那么你就去换一个bodymovin.zxp重新安装一遍，应该会解决这个问题。
:::

9. 可以看到导出的文件有`data.json`和images文件，images文件中的图片都是有描边的情况，但是我们的动画正常情况下是不需要描边的，所以需要把图片单独导出来进行手动同名替换。

![file.jpg](/assets/images/more/tools/lottie5.png)


10. 下面我们有了资源文件我们就要把这个运用到html中了，使用的时候发现如果是引用data.json是不能本地使用的，必须要使用http服务打开才能请求到，否则会报这个错误，**所以一定记得起服务**

![httperror.jpg](/assets/images/more/tools/lottie6.png)


11. 下面就是代码，下面的代码写完这个动画就可以播放了

```html
<!--第一步先引用lottieJS-->
<script src="./lottie.js"></script>
<!--第二步动画的容器设置好-->
<div id="animation"></div>
<!--第三步创建动画对象-->
<script>
    var b = lottie.loadAnimation({
        container: document.getElementById('animation'), // the dom element that will contain the animation
        renderer: 'svg', //渲染出来的是什么格式
        loop: true,  //循环播放
        autoplay: true, //自动播放
        path: 'data.json' // the path to the animation json
    });
</script>

```

