import type { HeadConfig } from "vitepress"
export default [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico'}],
    ['meta', { name: 'author', content: '狐七'}],
    ['meta', { name: 'keywords', content: 'vitepress，狐七的个人博客，html，css，javascript，es6'}],
    ['meta', { name: 'theme-color', content: '#3A5CCC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
] as HeadConfig[]
