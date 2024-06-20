import { defineConfig } from 'vitepress'
import nav from './config/navConfig';
import head from './config/headConfig';
import plugins from './config/pluginConfig';
import { sidebar } from './config/sidebarConfig';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "狐七的个人博客",
    description: "blog for hu77",
    head,
    srcDir: 'src',
    ignoreDeadLinks: true,// 忽略死链接检查
    themeConfig: {
        logo: '/assets/img/logo.webp',
        lastUpdatedText: '更新时间', // string | boolean
        // https://vitepress.dev/reference/default-theme-config
        nav,
        sidebar,
        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        //     { icon: 'twitter', link: 'https://twitter.com/vite_js'}
        // ],
        footer: {
            message: 'MIT Licensed',
            copyright: `版权所有 © 2019-${new Date().getFullYear()}  Burning`
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        search: {
            provider: 'local'
        }
    },
    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true,
        },
        lineNumbers: true
    },
    vite: {
        plugins,
    }
})
