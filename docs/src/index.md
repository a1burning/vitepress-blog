---
# https://vitepress.dev/reference/default-theme-home-page
# 这里不能格式化，启动会报错
layout: home

hero:
  name: "狐七的个人博客"
  text: ""
  tagline: 我努力向前，在看不到终点的路上，欣赏风景~
  pageClass: blog-home
  actions:
    - theme: brand
      text: 进入博客 ->
      link: /markdown-examples
    - theme: alt
      text: 进入面试题库网站 ->
      link: http://audition.hu77.top/
  image:
    src: '/assets/img/logo.webp'
    alt: 'logo1'

features:
  - icon: 🎉
    title: 共勉
    details: 成功不必在我，而努力必不唐捐。
  - icon: 🤔
    title: 关于我
    details: 一直在努力的前端工程师。
  - icon: 🚀
    title: 技能
    details: HTML、CSS、JavaScript、ES6、Vue

---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #f492f4 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPImage.image-src {
  width: 230px;
  border-radius: 50%;
}

.VPImage.logo {
  border-radius: 50%;
}

.VPContent.is-home {
  position: relative;
}
.VPHome {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
